import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDgSignUpComponent } from './view-dg-sign-up.component';

describe('ViewDgSignUpComponent', () => {
  let component: ViewDgSignUpComponent;
  let fixture: ComponentFixture<ViewDgSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDgSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDgSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
