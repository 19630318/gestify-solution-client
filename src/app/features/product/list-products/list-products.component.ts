import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { MockProductService } from '@core/utils/fake-service/products-fake.service';
import { Product } from '@core/interfaces/product/product';
import { ProductComponent } from '@componentsShared/product/product.component';
import { PaginationComponent } from '@componentsShared/pagination/pagination.component';
import { ProductPlaceholderComponent } from '@componentsShared/product-placeholder/product-placeholder.component';
import { ShearchingBarComponent } from '@componentsShared/shearching-bar/shearching-bar.component';

@Component({
  selector: 'app-list-products',
  imports: [
    CommonModule,
    TranslocoModule,
    ProductComponent,
    PaginationComponent,
    ProductPlaceholderComponent,
    ShearchingBarComponent
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

  private mockProductService = inject(MockProductService);

  productsList = signal<Product[]>([]);
  loading = signal<boolean>(true);

  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts() {
    this.mockProductService.getAll().then((products) => {
      console.log(products);
      this.productsList.set(products);
      this.loading.set(false);
    });
  }

}
