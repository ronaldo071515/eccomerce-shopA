import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products.service';
import { Products, Category } from '../../models/productos.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styles: [
  ]
})
export class ListProductsComponent implements OnInit {

  products: Products[] = [];
  category = Category;
  categoryOption: string | undefined;
  sort = 'desc';
  count = '10';

  constructor(
    private productService: ProductsService,
  ) { }

  

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts(this.count, this.sort, this.categoryOption)
      .subscribe( (_products: any) => {
        this.products = _products;
    });
  }

  getCategory(category: string) {
    this.products = [];
    this.categoryOption = category;
    this.getProducts();
  }
    
}
