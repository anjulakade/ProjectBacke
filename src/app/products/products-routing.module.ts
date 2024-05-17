import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProducthomeComponent } from './producthome/producthome.component';

const routes: Routes = 
[ {path:"", component:ProducthomeComponent},
  {path:'add',component:RegisterProductComponent},
  {path:'view',component:ViewProductComponent},
  {path:'edit/:productId',component: RegisterProductComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
