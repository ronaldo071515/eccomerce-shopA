import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { InfoProductComponent } from './pages/info-product/info-product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListProductsComponent
      },
      {
        path: 'info-product',
        component: InfoProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
