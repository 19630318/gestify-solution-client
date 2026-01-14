import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessHomePlaceholderComponent } from './business-home-placeholder.component';

describe('BusinessHomePlaceholderComponent', () => {
  let component: BusinessHomePlaceholderComponent;
  let fixture: ComponentFixture<BusinessHomePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessHomePlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessHomePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
