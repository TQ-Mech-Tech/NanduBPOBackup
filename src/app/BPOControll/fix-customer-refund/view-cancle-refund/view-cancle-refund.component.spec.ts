import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCancleRefundComponent } from './view-cancle-refund.component';

describe('ViewCancleRefundComponent', () => {
  let component: ViewCancleRefundComponent;
  let fixture: ComponentFixture<ViewCancleRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCancleRefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCancleRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
