import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, of, tap } from 'rxjs';


import { UserLogin } from '../products/models/userLogin.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario!: string;

  get usuario() {
    return this._usuario;
  }

  setUsuario(newVal: any) {
    this._usuario = newVal;
  }

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string) {
    
    const body = { username, password };

    return this.http.post<UserLogin>(`${ environment.url }/auth/login`, body)
      .pipe(
        tap( resp => {
          if(resp) {
            localStorage.setItem('token', resp.token!);
            localStorage.setItem('user', username);
            this._usuario = username;
          }
        }),
        map( resp => resp),
        catchError( error => of(error.error) )
      );
  }

  logout() {
    localStorage.removeItem('token');
    this._usuario = '';
  }

}
