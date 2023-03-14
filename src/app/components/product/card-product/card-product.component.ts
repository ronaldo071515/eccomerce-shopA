import { Component, Input } from '@angular/core';

import { Products } from '../../../products/models/productos.interface';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styles: [
  ]
})
export class CardProductComponent {
  
  @Input() product!: Products;

  constructor(
    private cartService: CartService
  ) {}


  addCart(id: number, product: any) {
    this.cartService.addCart(id, product);
  }

}
