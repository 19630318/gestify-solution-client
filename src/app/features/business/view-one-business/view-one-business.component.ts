import { Component, inject, signal } from '@angular/core';
import { AlertService } from '@core/services/alerts/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from '@core/interfaces/business/business';
import { BusinessApiService } from '@core/services/business-api/business-api.service';
import { CoreService } from '@core/interfaces/core/core.service';
import { ProductPlaceholderComponent } from '@componentsShared/product-placeholder/product-placeholder.component';
import { ProductComponent } from '@componentsShared/product/product.component';
import { Product } from '@core/interfaces/product/product';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { forkJoin } from 'rxjs';
import { BusinessHomePlaceholderComponent } from '@componentsShared/business-home-placeholder/business-home-placeholder.component';

@Component({
  selector: 'app-view-one-business',
  imports: [
    ProductPlaceholderComponent,
    ProductComponent,
    TranslocoModule,
    BusinessHomePlaceholderComponent
  ],
  templateUrl: './view-one-business.component.html',
  styleUrl: './view-one-business.component.css'
})
export class ViewOneBusinessComponent {

  readonly transloco = inject(TranslocoService);
  alertService = inject(AlertService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  coreService = inject(CoreService);
  private businessApiService = inject(BusinessApiService);
  loadingProducts = signal(true);
  loadingBusiness = signal(true);
  uuid = signal('');
  business = signal<Business>({} as Business);
  productsList = signal<Product[]>([]);
  
  ngOnInit() {
    const uuidValue = this.route.snapshot.paramMap.get('uuid')!;
    this.uuid.set(uuidValue);
    console.log('uuidValueBusiness', uuidValue);
    this.getBusinessAndProducts();
  }

  ngOnDestroy(): void {
    this.coreService.setDefaultLogo();
  }

  getBusinessAndProducts() {
    forkJoin({
      business: this.businessApiService.getBusinessByUuid(this.uuid()),
      products: this.businessApiService.getProductsByBusinessUuid(this.uuid(), 0, 10)
    }).subscribe({
      next: ({ business, products }) => {
        console.log('business', business);
        console.log('products', products);
        if (business) {
          this.business.set(business);
          this.coreService.setLogo({
            name: business.name,
            urlLogo: business.logo.url
          });
        }
        if (products) {
          this.productsList.set(products.content);
        }
        this.loadingProducts.set(false);
        this.loadingBusiness.set(false);
      },
      error: (err) => {
        this.alertService.show(this.transloco.translate('errors.ERROR_LOADING_BUSINESS'), err);
        this.loadingProducts.set(false);
      }
    });
  }

}
