import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDgProfileComponent } from './view-dg-profile.component';

describe('ViewDgProfileComponent', () => {
  let component: ViewDgProfileComponent;
  let fixture: ComponentFixture<ViewDgProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDgProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDgProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
