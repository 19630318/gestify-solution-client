import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-rating',
  imports: [
    CommonModule,
    TranslocoModule
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  maxStars = 5;

  @Input() review: any = [];
  @Input() sizeComponent: 'tiny' | 'small' | 'medium' | 'large' = 'tiny';

  get averageRating(): number {
    if (this.review.length === 0) return 0;
    const total = this.review.reduce((acc: number, r: any) => acc + r.rating, 0);
    return total / this.review.length;
  }

  starsFill(): number[] {
    return Array(Math.round(this.averageRating)).fill(0);
  }

  starsUnFill(): number[] {
    return Array(this.maxStars - Math.round(this.averageRating)).fill(0);
  }

  numberReviews(): number {
    return this.review.length;
  }
}
