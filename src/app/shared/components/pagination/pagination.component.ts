import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-pagination',
  imports: [
    CommonModule,
    TranslocoModule
  ],
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input() sizeComponent: 'small' | 'large' = 'small';
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

}
