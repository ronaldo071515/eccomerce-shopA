import { Component, OnInit } from '@angular/core';
import { CartProducts } from '../../models/producto.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  productsCart!: CartProducts[];

  constructor() { }

  ngOnInit(): void {
    const articlesCart = JSON.parse( localStorage.getItem('cartProducts')! );
    this.productsCart = articlesCart;
  }

}
