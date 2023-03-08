import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { ProductsService } from '../../../services/products.service';
import { Product } from '../../models/producto.interface';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styles: [
  ]
})
export class InfoProductComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductsService,
    private activateRoute: ActivatedRoute,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.productService.getProductById(id))
      )
      .subscribe( product => this.product = product );
  }

  backAllProducts() {
    this.route.navigateByUrl('/')
  }

}
