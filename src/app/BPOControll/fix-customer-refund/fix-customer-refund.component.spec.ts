import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixCustomerRefundComponent } from './fix-customer-refund.component';

describe('FixCustomerRefundComponent', () => {
  let component: FixCustomerRefundComponent;
  let fixture: ComponentFixture<FixCustomerRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixCustomerRefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixCustomerRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
