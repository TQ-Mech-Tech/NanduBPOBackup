import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderTracingComponent } from './update-order-tracing.component';

describe('UpdateOrderTracingComponent', () => {
  let component: UpdateOrderTracingComponent;
  let fixture: ComponentFixture<UpdateOrderTracingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrderTracingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrderTracingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
