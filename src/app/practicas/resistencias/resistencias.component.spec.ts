import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciasComponent } from './resistencias.component';

describe('ResistenciasComponent', () => {
  let component: ResistenciasComponent;
  let fixture: ComponentFixture<ResistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistenciasComponent]
    });
    fixture = TestBed.createComponent(ResistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
