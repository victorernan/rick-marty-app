import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowPersonajesComponent } from './slideshow-personajes.component';

describe('SlideshowPersonajesComponent', () => {
  let component: SlideshowPersonajesComponent;
  let fixture: ComponentFixture<SlideshowPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideshowPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
