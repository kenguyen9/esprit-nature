import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLaboratoryComponent } from './doctor-laboratory.component';

describe('DoctorLaboratoryComponent', () => {
  let component: DoctorLaboratoryComponent;
  let fixture: ComponentFixture<DoctorLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorLaboratoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
