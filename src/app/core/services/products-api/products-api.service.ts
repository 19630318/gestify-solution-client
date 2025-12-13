import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Product, ProductPage } from '@core/interfaces/product/product';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor() { }
  private productsCache = signal<Record<string, ProductPage>>({});
  private http = inject(HttpClient);

  getAllProducts(page: number = 0, size: number = 25): Observable<ProductPage> {
    const key = `${page}-${size}`;

    const cache = this.productsCache()[key];
    if (cache) {
      return of(cache);
    }

    return this.http.get<ProductPage>(
      `${environment.apiUrl}/products?page=${page}&size=${size}`
    ).pipe(
      tap((res) => {
        this.productsCache.update(cache => ({
          ...cache,
          [key]: res
        }));
      })
    );
  }

  getProductById(id: string) {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
  }

  clearCache() {
    this.productsCache.set({});
  }

}
