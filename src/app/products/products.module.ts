import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { InfoProductComponent } from './pages/info-product/info-product.component';
import { CardProductComponent } from '../components/product/card-product/card-product.component';


@NgModule({
  declarations: [
    ListProductsComponent,
    InfoProductComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
