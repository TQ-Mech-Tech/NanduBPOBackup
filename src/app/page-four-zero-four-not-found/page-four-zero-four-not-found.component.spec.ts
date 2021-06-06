import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFourZeroFourNotFoundComponent } from './page-four-zero-four-not-found.component';

describe('PageFourZeroFourNotFoundComponent', () => {
  let component: PageFourZeroFourNotFoundComponent;
  let fixture: ComponentFixture<PageFourZeroFourNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFourZeroFourNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFourZeroFourNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
