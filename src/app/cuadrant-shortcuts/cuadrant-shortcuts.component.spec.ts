import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrantShortcutsComponent } from './cuadrant-shortcuts.component';

describe('CuadrantShortcutsComponent', () => {
  let component: CuadrantShortcutsComponent;
  let fixture: ComponentFixture<CuadrantShortcutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadrantShortcutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrantShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
