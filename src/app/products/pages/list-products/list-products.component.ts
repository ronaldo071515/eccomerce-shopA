import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Products } from '../../models/productos.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styles: [
  ]
})
export class ListProductsComponent implements OnInit {

  products: Products[] = [];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe( (_products: any) => {
        this.products = _products;
    });
  }
    
}
