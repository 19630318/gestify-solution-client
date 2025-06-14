import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOnePlaceholderViewComponent } from './product-one-placeholder-view.component';

describe('ProductOnePlaceholderViewComponent', () => {
  let component: ProductOnePlaceholderViewComponent;
  let fixture: ComponentFixture<ProductOnePlaceholderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOnePlaceholderViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOnePlaceholderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
