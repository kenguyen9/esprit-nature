import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoueComponent } from './boue.component';

describe('BoueComponent', () => {
  let component: BoueComponent;
  let fixture: ComponentFixture<BoueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
