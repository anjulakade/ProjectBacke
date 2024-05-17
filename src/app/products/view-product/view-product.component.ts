import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Product } from '../../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent  implements OnInit{
  constructor(private ps:ProductService,
    private router:Router
  ){}
  registerForm:FormGroup;

  product:Product[]
@Output() emmitProduct:EventEmitter<Product>=new EventEmitter();


  ngOnInit(): void {
     this.ps.getAllProduct().subscribe((res:Product[])=>{
    this.product = res;
    })
  
}
onedit(product:Product)
{
this.router.navigateByUrl(`/products/edit/${product.productId}`)

}





ondelte(productId:number){
  alert(productId)
  this.ps.deleteProduct(productId).subscribe();
 window.location.reload
}
}



