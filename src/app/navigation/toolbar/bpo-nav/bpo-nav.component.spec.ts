import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPONavComponent } from './bpo-nav.component';

describe('BPONavComponent', () => {
  let component: BPONavComponent;
  let fixture: ComponentFixture<BPONavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPONavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPONavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
