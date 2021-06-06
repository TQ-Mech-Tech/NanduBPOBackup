import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResponsibleComponent } from './view-responsible.component';

describe('ViewResponsibleComponent', () => {
  let component: ViewResponsibleComponent;
  let fixture: ComponentFixture<ViewResponsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResponsibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
