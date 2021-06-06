import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPOauthLoginComponent } from './bpoauth-login.component';

describe('BPOauthLoginComponent', () => {
  let component: BPOauthLoginComponent;
  let fixture: ComponentFixture<BPOauthLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPOauthLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPOauthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
