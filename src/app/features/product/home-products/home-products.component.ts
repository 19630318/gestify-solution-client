import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { interval, Subject, takeUntil } from 'rxjs';

interface imagesCarousel {
  id: number,
  image: string,
  title: string,
  isSelected: boolean
}
@Component({
  standalone: true,
  selector: 'app-home-products',
  imports: [
    CommonModule,
    TranslocoModule
  ],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeProductsComponent {

  imagesCarousel: imagesCarousel[] = [
    {
      id: 1,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg',
      title: 'Product 1',
      isSelected: false
    },
    {
      id: 2,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg',
      title: 'Product 2',
      isSelected: true
    },
    {
      id: 3,
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
      title: 'Product 3',
      isSelected: false
    }
  ];

  private destroy$ = new Subject<void>();
  //cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.changeImageCarouselByTime();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeImageCarouselByTime() {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
      this.changeImageCarouselLeftAndRight('right');
      //this.cdr.markForCheck();
    });
  }

  changeImageCarousel(id: number) {
    this.imagesCarousel.forEach((image) => {
      if (image.id === id) {
        image.isSelected = true;
      } else {
        image.isSelected = false;
      }
    });
  }

  changeImageCarouselLeftAndRight(position: string) {
    const imagesCarouselLength = this.imagesCarousel.length;
    let index = this.imagesCarousel.findIndex((image) => image.isSelected === true);
    if (position === 'left') {
      if(index === 0) {
        index = imagesCarouselLength - 1;
      } else {
        index--;
      }
      this.changeImageCarousel(index + 1)
    } else if (position === 'right') {
      if(index === imagesCarouselLength - 1) {
        index = 0;
      } else {
        index++;
      }
      this.changeImageCarousel(index + 1)
    }
  }

}
