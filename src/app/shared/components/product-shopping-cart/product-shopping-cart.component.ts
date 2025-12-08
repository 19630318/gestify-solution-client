import { Component, Input } from '@angular/core';
import { Product } from '@core/interfaces/product/product';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-shopping-cart',
  imports: [
    CommonModule,
    TranslocoModule,
    MatIconModule
  ],
  templateUrl: './product-shopping-cart.component.html',
  styleUrl: './product-shopping-cart.component.css'
})
export class ProductShoppingCartComponent {

  
  @Input() product: Product = {} as Product;
  @Input() expanded: boolean = false;
  
}
