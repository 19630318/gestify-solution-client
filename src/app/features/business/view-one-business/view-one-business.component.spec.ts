import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneBusinessComponent } from './view-one-business.component';

describe('ViewOneBusinessComponent', () => {
  let component: ViewOneBusinessComponent;
  let fixture: ComponentFixture<ViewOneBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOneBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOneBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
