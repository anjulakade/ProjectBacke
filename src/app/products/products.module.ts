import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ViewProductComponent } from './view-product/view-product.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProducthomeComponent } from './producthome/producthome.component';

console.log("Product Module ............")
@NgModule({
  declarations: [
    ViewProductComponent,
    RegisterProductComponent,
    ProducthomeComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  exports:[
    ViewProductComponent,
    RegisterProductComponent

  ]
})
export class ProductsModule { }
