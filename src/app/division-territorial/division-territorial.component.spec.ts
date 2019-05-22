import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionTerritorialComponent } from './division-territorial.component';

describe('DivisionTerritorialComponent', () => {
  let component: DivisionTerritorialComponent;
  let fixture: ComponentFixture<DivisionTerritorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionTerritorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionTerritorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
