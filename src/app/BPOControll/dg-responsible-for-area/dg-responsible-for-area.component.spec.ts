import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DGResponsibleForAreaComponent } from './dg-responsible-for-area.component';

describe('DGResponsibleForAreaComponent', () => {
  let component: DGResponsibleForAreaComponent;
  let fixture: ComponentFixture<DGResponsibleForAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DGResponsibleForAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DGResponsibleForAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
