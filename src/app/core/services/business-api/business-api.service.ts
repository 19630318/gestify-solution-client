import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BusinessPage } from '@core/interfaces/business/business';
import { environment } from '@env/environment';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessApiService {

  constructor() { }
  private businessCache = signal<Record<string, BusinessPage>>({}); 
  private http = inject(HttpClient);


  getAllBusinesses(page: number = 0, size: number = 8) {
    const key = `${page}-${size}`;

    const cache = this.businessCache()[key];
    if (cache) {
      return of(cache); //of is used to create an observable from a value
    }

    return this.http.get<BusinessPage>(
      `${environment.apiUrl}/businesses?page=${page}&size=${size}`
    ).pipe(
      tap((res) => { //tap is used to perform side effects
        this.businessCache.update(cache => ({
          ...cache,
          [key]: res
        }));
      })
    );
  }

}
