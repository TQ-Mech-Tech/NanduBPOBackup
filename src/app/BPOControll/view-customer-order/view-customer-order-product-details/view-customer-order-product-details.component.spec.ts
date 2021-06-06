import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerOrderProductDetailsComponent } from './view-customer-order-product-details.component';

describe('ViewCustomerOrderProductDetailsComponent', () => {
  let component: ViewCustomerOrderProductDetailsComponent;
  let fixture: ComponentFixture<ViewCustomerOrderProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerOrderProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerOrderProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
