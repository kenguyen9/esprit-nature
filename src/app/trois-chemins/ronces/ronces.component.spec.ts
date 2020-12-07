import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoncesComponent } from './ronces.component';

describe('RoncesComponent', () => {
  let component: RoncesComponent;
  let fixture: ComponentFixture<RoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
