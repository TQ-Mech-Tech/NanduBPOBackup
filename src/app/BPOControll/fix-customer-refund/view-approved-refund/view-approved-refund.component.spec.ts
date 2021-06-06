import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApprovedRefundComponent } from './view-approved-refund.component';

describe('ViewApprovedRefundComponent', () => {
  let component: ViewApprovedRefundComponent;
  let fixture: ComponentFixture<ViewApprovedRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewApprovedRefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApprovedRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
