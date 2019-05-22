import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionServicioComponent } from './division-servicio.component';

describe('DivisionServicioComponent', () => {
  let component: DivisionServicioComponent;
  let fixture: ComponentFixture<DivisionServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
