import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGrindProductComponent } from './view-grind-product.component';

describe('ViewGrindProductComponent', () => {
  let component: ViewGrindProductComponent;
  let fixture: ComponentFixture<ViewGrindProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGrindProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGrindProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
