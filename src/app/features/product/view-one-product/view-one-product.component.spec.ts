import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneProductComponent } from './view-one-product.component';

describe('ViewOneProductComponent', () => {
  let component: ViewOneProductComponent;
  let fixture: ComponentFixture<ViewOneProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOneProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
