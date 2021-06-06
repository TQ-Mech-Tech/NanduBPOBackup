import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGridingProductComponent } from './add-griding-product.component';

describe('AddGridingProductComponent', () => {
  let component: AddGridingProductComponent;
  let fixture: ComponentFixture<AddGridingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGridingProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGridingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
