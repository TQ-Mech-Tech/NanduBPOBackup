import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDeviceNotSupportedComponent } from './small-device-not-supported.component';

describe('SmallDeviceNotSupportedComponent', () => {
  let component: SmallDeviceNotSupportedComponent;
  let fixture: ComponentFixture<SmallDeviceNotSupportedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallDeviceNotSupportedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallDeviceNotSupportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
