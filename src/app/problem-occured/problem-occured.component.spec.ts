import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemOccuredComponent } from './problem-occured.component';

describe('ProblemOccuredComponent', () => {
  let component: ProblemOccuredComponent;
  let fixture: ComponentFixture<ProblemOccuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemOccuredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemOccuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
