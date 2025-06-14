import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-pagination',
  imports: [
    CommonModule,
    TranslocoModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input() sizeComponent: 'small' | 'large' = 'small';
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 0;
  @Output() pageChange = new EventEmitter<number>();

  pageChangeEvent(page: number) {
    this.pageChange.emit(page);
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

}
