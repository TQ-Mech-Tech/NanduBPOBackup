import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerProfileTableComponent } from './view-customer-profile-table.component';

describe('ViewCustomerProfileTableComponent', () => {
  let component: ViewCustomerProfileTableComponent;
  let fixture: ComponentFixture<ViewCustomerProfileTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerProfileTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerProfileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
