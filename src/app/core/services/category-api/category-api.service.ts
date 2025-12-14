import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { CategoryPage } from '@core/interfaces/category/category';
import { environment } from '@env/environment';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  private categoriesCache = signal<Record<string, CategoryPage>>({});

  http = inject(HttpClient);

  getAllCategories(size: number = 10): Observable<CategoryPage> {

    const key = `${size}`;
    const cache = this.categoriesCache()[key];

    if (cache) {
      return of(cache); // of is used to create an observable from a value
    }

    return this.http
      .get<CategoryPage>(`${environment.apiUrl}/products-categories?size=${size}`)
      .pipe(
        tap(response => { //tap is used to perform side effects
          this.categoriesCache.set({
            ...this.categoriesCache(),
            [key]: response
          });
        })
      );
  }

}