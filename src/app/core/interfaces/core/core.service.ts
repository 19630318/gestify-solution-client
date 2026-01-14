import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Logo } from './logo';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }

  private _logo$ = new BehaviorSubject<Logo>({
    name: 'Gestify Solution Client',
    urlLogo: 'https://gestifysolutionpanel.oscarmedina.cloud/assets/logo.png'
  });

  logo$ = this._logo$.asObservable();

  setLogo(valor: Logo) {
    this._logo$.next(valor);
  }

  getLogo(): Logo {
    return this._logo$.value;
  }

  setDefaultLogo() {
    this._logo$.next({
      name: 'Gestify Solution Client',
      urlLogo: 'https://gestifysolutionpanel.oscarmedina.cloud/assets/logo.png'
    });
  }
  
}
