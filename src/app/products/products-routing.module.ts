import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { InfoProductComponent } from './pages/info-product/info-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { AuthValidGuard } from '../guards/auth-valid.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListProductsComponent
      },
      {
        path: 'info-product/:id',
        component: InfoProductComponent
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [ AuthValidGuard ],
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
