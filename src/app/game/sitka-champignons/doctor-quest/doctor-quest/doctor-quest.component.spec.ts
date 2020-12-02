import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorQuestComponent } from './doctor-quest.component';

describe('DoctorQuestComponent', () => {
  let component: DoctorQuestComponent;
  let fixture: ComponentFixture<DoctorQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
