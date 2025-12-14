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
import { ListSettingsPagination } from '@core/interfaces/sizepagination/sizepagination';
import { CategoryApiService } from '@core/services/category-api/category-api.service';

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
  private categoryApiSelected = inject(CategoryApiService);
  private productsApiService = inject(ProductsApiService);

  settings = signal<ListSettingsPagination>({
    sizeComponent: 'small',
    totalPages: 0,
    currentPage: 0,
  });
  productsList = signal<Product[]>([]);
  loading = signal<boolean>(true);
  listCategory = signal<string[]>(['search.ALLCATEGORIES']);
  nameModel = signal('listProducts');

  ngOnInit() {
    this.getAllProducts(0); // page 0 por defecto
    this.getCategories();
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

  getCategories() {
    this.categoryApiSelected.getAllCategories().subscribe((res) => {
      this.listCategory.update((list) => [...list, ...res.content.map((item) => item.name)]);
    });
  }

  onPageChange(newPage: number) {
    this.getAllProducts(newPage - 1); // restar 1 porque backend usa 0-based
  }

}
