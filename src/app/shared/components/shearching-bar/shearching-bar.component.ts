import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { OverlayModule } from '@angular/cdk/overlay';

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

  listCategory = signal(['search.ALLCATEGORIES', 'sidebar.categories.MODERN', 'sidebar.categories.CLASSIC', 'sidebar.categories.VINTAGE', 'sidebar.categories.WOOD', 'sidebar.categories.METAL', 'sidebar.categories.PVC']);
  isOpenListCategory = signal(false);

  selectCategory = signal('search.ALLCATEGORIES');

  selectCategoryItem(category: string) {
    this.selectCategory.set(category);
    this.isOpenListCategory.set(false);
  }
  
}
