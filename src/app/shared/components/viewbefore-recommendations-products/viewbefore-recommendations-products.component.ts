import { Component, inject, signal } from '@angular/core';
import { CookieServiceService } from '@core/services/cookie/cookie-service.service';
import { productsListFake } from './products-fake';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { toLightweightProduct } from '@core/utils/helper';

@Component({
  selector: 'app-viewbefore-recommendations-products',
  imports: [
    CommonModule,
    RouterLink,
    TranslocoModule
  ],
  templateUrl: './viewbefore-recommendations-products.component.html',
  styleUrl: './viewbefore-recommendations-products.component.css'
})
export class ViewbeforeRecommendationsProductsComponent {

  readonly cookieService = inject(CookieServiceService);
  productList = signal<any>([]);
  maxToShow = 4;

  ngOnInit() {
    this.productList.set(this.getProductList());
    //console.log('Product List viewbefore-recommendations-products: ', this.productList());
  }

  getProductList() {
    const productListCookie = this.cookieService.getCookie('productListCookie');
    const productList = productListCookie ? JSON.parse(productListCookie) : [];
  
    const productListNumber = productList.length;
    const productsLeft = this.maxToShow - productListNumber;
  
    if (productsLeft > 0) {
      const filler = productsListFake.slice(0, productsLeft).map(toLightweightProduct);
      return [...productList, ...filler];
    }
  
    return productList.length > 0
      ? productList.slice(0, this.maxToShow)
      : productsListFake.slice(0, this.maxToShow).map(toLightweightProduct);
  }

}
