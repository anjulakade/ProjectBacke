import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }
  saveproduct(product:Product){
    return this.http.post(`http://localhost:9095/product/product`,product)
  }
  getAllProduct()
  {
    return this.http.get(`http://localhost:9095/product/products`)
   }
  getAllProductbyid(productId:number)
  {
    return this.http.get(`http://localhost:9095/product/product/${productId}`)
  }

updateProduct(product:Product){

  return this.http.put(`http://localhost:9095/product/product/${product.productId}`,product)
}



  deleteProduct(productId:number)
 {

  return this.http.delete(`http://localhost:9095/product/product/${productId}`);
 }

}
