import { Component, inject, signal } from '@angular/core';

import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { MockProductService } from '@core/utils/fake-service/products-fake.service';
import { Product } from '@core/interfaces/product/product';
import { ProductComponent } from '@componentsShared/product/product.component';
import { PaginationComponent } from '@componentsShared/pagination/pagination.component';
import { ProductPlaceholderComponent } from '@componentsShared/product-placeholder/product-placeholder.component';
import { ShearchingBarComponent } from '@componentsShared/shearching-bar/shearching-bar.component';
import { ProductsApiService } from '@core/services/products-api/products-api.service';
import { ListSettingsPagination } from '@core/interfaces/sizepagination/sizepagination';
import { CategoryApiService } from '@core/services/category-api/category-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-products',
  imports: [
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
  readonly transloco = inject(TranslocoService);
  private route = inject(ActivatedRoute);

  settings = signal<ListSettingsPagination>({
    sizeComponent: 'small',
    totalPages: 0,
    currentPage: 0,
  });
  productsList = signal<Product[]>([]);
  loading = signal<boolean>(true);
  listCategory = signal<string[]>([]);
  nameModel = signal('listProducts');

  ngOnInit() {
    this.getCategoryQueryParams(); // page 0 por defecto
    this.getCategories();
  }

  getCategoryQueryParams() {
    this.route.queryParamMap.subscribe(params => {
      const categoryId = params.get('categoryId');
      if(categoryId) {
        this.getAllProducts(0, categoryId);
      } else {
        this.getAllProducts(0);
      }
    });
    //this.listCategory(
  }

  getAllProducts(page: number, categoryId?: string) {
    this.loading.set(true);

    this.productsApiService.getAllProducts(page, undefined, categoryId).subscribe((res) => {

      this.productsList.set(res.content);
      if (res.content.length === 0) {
        this.nameModel.set('products.NO_PRODUCTS_FOUND');
      } else {
        this.nameModel.set('listProducts');
      }

      this.settings.set({
        ...this.settings(),
        totalPages: res.page.totalPages,
        currentPage: res.page.number + 1,
      });

      this.loading.set(false);
    });
  }

  getCategories() {
    this.categoryApiSelected.getAllCategories().subscribe((res) => {
      this.listCategory.update((list) => [this.transloco.translate('search.ALLCATEGORIES'), ...res.content.map((item) => item.name)]);
    });
  }

  onPageChange(newPage: number) {
    this.getAllProducts(newPage - 1); // restar 1 porque backend usa 0-based
  }

}
