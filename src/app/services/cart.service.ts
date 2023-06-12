import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import Swal from 'sweetalert2';

import { AuthService } from './auth.service';
import { CartProducts } from '../products/models/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: CartProducts[] = [];
  private cartSubject = new BehaviorSubject<CartProducts[]>(this._cart);

  get cartSubject$(): Observable<CartProducts[]> {
    return this.cartSubject.asObservable();
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  addCart(productid: number, product: any) {
    return this.authService.validateSesion()
      .subscribe( data => {
        if( !data ) {
          const swalButtons = Swal.mixin({
            customClass: {
              confirmButton: 'text-white bg-blue-600 border-0 py-2 px-6 rounded mr-2',
              cancelButton: 'text-white bg-red-500 border-0 py-2 px-6 rounded'
            },
            buttonsStyling: false
          })
          swalButtons.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes iniciar sesion',
            showCancelButton: true,
            confirmButtonText: 'Ir a Login',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          }).then( result => {
            if( result.isConfirmed ) {
              this.router.navigateByUrl('/auth');
            }
          });
        } else {
          const articlesCart = JSON.parse( localStorage.getItem('cartProducts')! );
          const productCart = { productid, quantity: 1, product, ...articlesCart };
          const existe = this._cart.some( product => product.productid === productid );
          if ( existe ) {
              const products = this._cart.map( product => {
                  if( product.productid === productid ) {
                      product.quantity++;
                      return product;
                  } else {
                      return product;
                  }
              });
              this._cart = [ ...products ];
          } else {
              this._cart = [ ...this._cart, productCart ];
              localStorage.setItem('cartProducts', JSON.stringify( this._cart ));
          }
          this.cartSubject.next(this._cart);
        }
      });
  }
}
