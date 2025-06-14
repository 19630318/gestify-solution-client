import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@core/interfaces/product/product';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { RatingComponent } from '@componentsShared/rating/rating.component';

@Component({
  selector: 'app-product',
  imports: [
    RouterLink,
    CommonModule,
    TranslocoModule,
    RatingComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product: Product = {} as Product;

  calculateDiscount(price: number, discount: number): number {
    return price + (price * (discount / 100));
  }

}
