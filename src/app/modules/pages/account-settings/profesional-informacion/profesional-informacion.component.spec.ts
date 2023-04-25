import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalInformacionComponent } from './profesional-informacion.component';

describe('ProfesionalInformacionComponent', () => {
  let component: ProfesionalInformacionComponent;
  let fixture: ComponentFixture<ProfesionalInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesionalInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
