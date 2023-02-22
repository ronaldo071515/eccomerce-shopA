import { Component, Input } from '@angular/core';
import { Products } from '../../../products/models/productos.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styles: [
  ]
})
export class CardProductComponent {
  
  @Input() product!: Products;

}
