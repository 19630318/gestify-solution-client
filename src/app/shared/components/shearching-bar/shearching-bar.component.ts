import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { OverlayModule } from '@angular/cdk/overlay';
import { CategoryApiService } from '@core/services/category-api/category-api.service';

@Component({
  selector: 'app-shearching-bar',
  imports: [
    CommonModule,
    TranslocoModule,
    OverlayModule,
  ],
  templateUrl: './shearching-bar.component.html',
  styleUrl: './shearching-bar.component.css'
})
export class ShearchingBarComponent {

  @Input() listCategory: string[] = [];
  @Input() nameModel: string = '';
  @Input() showShearchingBar: boolean = false;
  isOpenListCategory = signal(false);
  categorySelected = inject(CategoryApiService);
  selectCategory = signal('search.ALLCATEGORIES');

  ngOnInit(): void {
  }

  selectCategoryItem(category: string) {
    this.selectCategory.set(category);
    this.isOpenListCategory.set(false);
  }
  
}
