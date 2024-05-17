import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrl: './register-product.component.css'
})
export class RegisterProductComponent implements OnInit{
   constructor(private fb:FormBuilder,
     private ps:ProductService,
    private acivaterouter:ActivatedRoute){}
 
   registerform:FormGroup
   flag:boolean=false
   ngOnInit(): void {
    this.registerform=this.fb.group({
            productId:[],
            productName:[],
            productType:[],
            productPrice:[]
    })
    this.getProductToBeEdit();
  }
  onSubmit(){
if(!this.flag)
 { 
  this.ps.saveproduct(this.registerform.value).subscribe()

  alert("product data save");
}
else{
  this.ps.updateProduct(this.registerform.value).subscribe();
alert("update")
}
this.registerform.reset();
}





getProductToBeEdit(){

let productId:number
this.acivaterouter.paramMap.subscribe(
map=>{
  productId=parseInt(map.get('productId'));
})
if(productId!=0)
{
this.ps.getAllProductbyid(productId).subscribe((res:Product)=>{this.registerform.patchValue(res);
  this.flag=true;
})

}
}
}
  