import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductServicesComponent } from './view-product-services.component';

describe('ViewProductServicesComponent', () => {
  let component: ViewProductServicesComponent;
  let fixture: ComponentFixture<ViewProductServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
