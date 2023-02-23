import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Products } from '../products/models/productos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }


  getAllProducts(limit = '10', sort = 'desc', category?: string): Observable<Products[]> {
    return this.http.get<Products[]>(`${ environment.url }/products${category ? '/category/' + category : ''}?sort=${sort}&limit=${limit}`);
  }

}
