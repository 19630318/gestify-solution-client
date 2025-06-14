import { IMAGE_CONFIG, IMAGE_LOADER, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, inject, makeStateKey, PLATFORM_ID, signal, StateKey, TransferState } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbComponent } from '@componentsShared/breadcrumb/breadcrumb.component';
import { Product } from '@core/interfaces/product/product';
import { MockProductService } from '@core/utils/fake-service/products-fake.service';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { RatingComponent } from '@componentsShared/rating/rating.component';
import { ProductOnePlaceholderViewComponent } from '@componentsShared/product-one-placeholder-view/product-one-placeholder-view.component';
import { SharedModule } from './module';
import { AlertService } from '@core/services/alerts/alert.service';
import { ViewbeforeRecommendationsProductsComponent } from '@componentsShared/viewbefore-recommendations-products/viewbefore-recommendations-products.component';
import { CookieServiceService } from '@core/services/cookie/cookie-service.service';
import { toLightweightProduct } from '@core/utils/helper';

@Component({
  selector: 'app-view-one-product',
  imports: [
    CommonModule,
    BreadcrumbComponent,
    TranslocoModule,
    RatingComponent,
    ProductOnePlaceholderViewComponent,
    SharedModule,
    ViewbeforeRecommendationsProductsComponent
  ],
  templateUrl: './view-one-product.component.html',
  styleUrl: './view-one-product.component.css',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    }
  ]
})
export class ViewOneProductComponent {

  private mockProductService = inject(MockProductService);
  readonly transloco = inject(TranslocoService);
  readonly cookieService = inject(CookieServiceService);
  private transferState = inject(TransferState);
  alertService = inject(AlertService);
  private route = inject(ActivatedRoute);

  product = signal<Product>({} as Product);
  loading = signal<boolean>(true);
  uuid = signal<string>('');
  imagePreview = signal<string>('');
  private key!: StateKey<Product>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    const uuidValue = this.route.snapshot.paramMap.get('uuid')!;
    this.uuid.set(uuidValue);
    console.log('uuidValue', uuidValue);
    this.key = makeStateKey<Product>(uuidValue);
    this.getProduct();
  }

  async getProduct() {
    const uuid = this.uuid();
    const key = makeStateKey<Product>(uuid);
  
    if (isPlatformBrowser(this.platformId) && this.transferState.hasKey(key)) {
      // Caso cliente con TransferState (SSR ya cargado)
      const saved = this.transferState.get(key, {} as Product);
      console.log('Leyendo desde TransferState en cliente:', saved);
      this.product.set(saved);
      this.imagePreview.set(saved.images[0]?.url);
      this.loading.set(false);
      // Quitar la key si quieres evitar leerla otra vez
      this.transferState.remove(key);
      return;
    }
  
    // Aquí viene la petición al backend (cliente o servidor)
    try {
      const response = await this.mockProductService.getById(uuid);
      if (response.success) {
        this.product.set(response.data);
        this.imagePreview.set(response.data.images[0]?.url);
  
        if (isPlatformServer(this.platformId)) {
          console.log('Guardando en TransferState en servidor:', response.data);
          this.transferState.set(key, response.data);
        }
        this.addProductListCookie(response.data);
        this.loading.set(false);
      } else {
        this.alertService.show(this.transloco.translate('errors.PRODUCT_NOT_FOUND'), 'danger');
      }
    } catch (error) {
      this.alertService.show(this.transloco.translate('errors.NETWORK_ERROR'), 'danger');
      console.error('Error fetching product:', error);
    }
  }

  addProductListCookie(product: any) {
    const cookieKey = 'productListCookie';
    let productList: any[] = [];
  
    const existingCookie = this.cookieService.getCookie(cookieKey);
    if (existingCookie) {
      productList = JSON.parse(existingCookie);
    }
  
    // Evitar duplicados (opcional)
    productList = productList.filter(p => p.idProduct !== product.idProduct);
  
    // Agregar al final
    productList.push(toLightweightProduct(product));
    
  
    // Limitar a los últimos 4
    if (productList.length > 4) {
      productList = productList.slice(-4);
    }
    console.log('PRODUCT LIST: ', productList);
    this.cookieService.setObject(cookieKey, productList);
    console.log('PRODUCT LIST: ', this.cookieService.getObject(cookieKey));
  }

  changeImagePreview(image: string) {
    this.imagePreview.set(image);
  }

}
