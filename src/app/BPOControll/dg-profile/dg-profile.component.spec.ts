import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DGProfileComponent } from './dg-profile.component';

describe('DGProfileComponent', () => {
  let component: DGProfileComponent;
  let fixture: ComponentFixture<DGProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DGProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DGProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
