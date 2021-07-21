import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintarPersonajeComponent } from './pintar-personaje.component';

describe('PintarPersonajeComponent', () => {
  let component: PintarPersonajeComponent;
  let fixture: ComponentFixture<PintarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PintarPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PintarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
