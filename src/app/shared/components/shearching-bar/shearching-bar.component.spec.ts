import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearchingBarComponent } from './shearching-bar.component';

describe('ShearchingBarComponent', () => {
  let component: ShearchingBarComponent;
  let fixture: ComponentFixture<ShearchingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShearchingBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShearchingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
