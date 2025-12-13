import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { MockProductService } from '@core/utils/fake-service/products-fake.service';
import { Product } from '@core/interfaces/product/product';
import { ProductComponent } from '@componentsShared/product/product.component';
import { PaginationComponent } from '@componentsShared/pagination/pagination.component';
import { ProductPlaceholderComponent } from '@componentsShared/product-placeholder/product-placeholder.component';
import { ShearchingBarComponent } from '@componentsShared/shearching-bar/shearching-bar.component';
import { ProductsApiService } from '@core/services/products-api/products-api.service';

type PaginationSize = 'small' | 'large';

interface ProductListSettings {
  sizeComponent: PaginationSize;
  totalPages: number;
  currentPage: number;
}

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
  private productsApiService = inject(ProductsApiService);

  settings = signal<ProductListSettings>({
    sizeComponent: 'small',
    totalPages: 0,
    currentPage: 0,
  });
  productsList = signal<Product[]>([]);
  loading = signal<boolean>(true);

  ngOnInit() {
    this.getAllProducts(0); // page 0 por defecto
  }

  getAllProducts(page: number) {
    this.loading.set(true);

    this.productsApiService.getAllProducts(page).subscribe((res) => {

      this.productsList.set(res.content);

      this.settings.set({
        ...this.settings(),
        totalPages: res.totalPages,
        currentPage: res.number + 1,
      });

      this.loading.set(false);
    });
  }

  onPageChange(newPage: number) {
    this.getAllProducts(newPage - 1); // restar 1 porque backend usa 0-based
  }

}
