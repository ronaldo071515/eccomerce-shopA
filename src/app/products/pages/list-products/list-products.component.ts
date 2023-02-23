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
  categories: Category[] = [];
  category: string | undefined;
  sort = 'desc';
  count = '10';

  mens = "men's clothing";
  womens = "women's clothing";

  constructor(
    private productService: ProductsService
  ) { }

  

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts(this.count, this.sort, this.category)
      .subscribe( (_products: any) => {
        this.products = _products;
    });
  }

  getCategory(category: string) {
    this.category = category;
    this.getProducts();
  }
    
}
