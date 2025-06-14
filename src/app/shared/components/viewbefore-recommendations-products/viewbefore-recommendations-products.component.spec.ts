import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbeforeRecommendationsProductsComponent } from './viewbefore-recommendations-products.component';

describe('ViewbeforeRecommendationsProductsComponent', () => {
  let component: ViewbeforeRecommendationsProductsComponent;
  let fixture: ComponentFixture<ViewbeforeRecommendationsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewbeforeRecommendationsProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbeforeRecommendationsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
