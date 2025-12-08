import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideShoppingCartComponent } from './aside-shopping-cart.component';

describe('AsideShoppingCartComponent', () => {
  let component: AsideShoppingCartComponent;
  let fixture: ComponentFixture<AsideShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideShoppingCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
