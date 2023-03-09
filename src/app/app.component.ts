import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-ronaldo';
  showNavbar = true;
  userLocalStorage: string = ''
  
  get username() {
    return this.authService.usuario;
  }

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.userLocalStorage = JSON.stringify( localStorage.getItem('user') );
    this.userLocalStorage = JSON.parse( this.userLocalStorage );
    this.authService.setUsuario( this.userLocalStorage );
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !this.router.url.startsWith('/auth');
      }
    });
  }
}
