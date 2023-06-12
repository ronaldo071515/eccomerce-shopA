import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../../services/auth.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit, OnChanges, AfterContentChecked {

  @Input() username!: string;
  countProductsCart: number = 0;
  
  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router,
    ) {}
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
    const articlesCart = JSON.parse( localStorage.getItem('cartProducts')! );
    if( !articlesCart ) return;
      this.cartService.cartSubject$.subscribe(cartProducts => {
        console.log('observador', cartProducts);
      this.countProductsCart = cartProducts.length || articlesCart.length;
    });
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }
  
  ngOnInit(): void {
  }

  logout() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })  
    Toast.fire({
      icon: 'warning',
      title: 'Exit successfully'
    })

    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
