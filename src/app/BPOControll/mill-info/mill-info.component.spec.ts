import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillInfoComponent } from './mill-info.component';

describe('MillInfoComponent', () => {
  let component: MillInfoComponent;
  let fixture: ComponentFixture<MillInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MillInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MillInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
