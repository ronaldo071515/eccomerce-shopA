import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthValidGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private roter: Router
  ){}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validateSesion()
      .pipe(
        tap( valid => {
          if( !valid ) this.roter.navigateByUrl('/auth');
        })
      );
  }

}
