import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { OverlayModule } from '@angular/cdk/overlay';
import { ShearchingBarComponent } from '@componentsShared/shearching-bar/shearching-bar.component';
import { BusinessComponent } from '@componentsShared/business/business.component';
import { PaginationComponent } from '@componentsShared/pagination/pagination.component';
import { BusinessApiService } from '@core/services/business-api/business-api.service';
import { ListSettingsPagination } from '@core/interfaces/sizepagination/sizepagination';
import { Business } from '@core/interfaces/business/business';
import { ProductPlaceholderComponent } from '@componentsShared/product-placeholder/product-placeholder.component';

@Component({
  selector: 'app-list-businesses',
  imports: [
    CommonModule,
    TranslocoModule,
    OverlayModule,
    ShearchingBarComponent,
    BusinessComponent,
    PaginationComponent,
    ProductPlaceholderComponent,
  ],
  templateUrl: './list-businesses.component.html',
  styleUrl: './list-businesses.component.css'
})
export class ListBusinessesComponent {

  businessApiService = inject(BusinessApiService);
  businessesList = signal<Business[]>([]);
  loading = signal(false);
  transloco = inject(TranslocoService);
  settings = signal<ListSettingsPagination>({
    sizeComponent: 'small',
    totalPages: 0,
    currentPage: 0,
  });
  alertService: any;
  nameModel = signal('listBusinesses');

  ngOnInit() {
    this.getAllBusinesses(0);
  }

  getAllBusinesses(page: number) {
    this.loading.set(true);
    this.businessApiService.getAllBusinesses(page).subscribe({
      next: (res) => {
        this.businessesList.set(res.content);
        this.settings.set({
          sizeComponent: 'small',
          totalPages: res.totalPages,
          currentPage: res.number,
        });
      },
      error: (err) => {
        console.log(err);
        this.alertService.show({
          message: `${this.transloco.translate('ERROR_BUSINESSES_LIST')} ${err.message}`,
          type: 'error',
        });
      },
      complete: () => {
        this.loading.set(false);
      }
    });
  }

  onPageChange(page: number) {
    this.getAllBusinesses(page - 1);
  }

}
