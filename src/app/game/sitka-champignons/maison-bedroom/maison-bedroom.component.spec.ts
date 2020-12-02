import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonBedroomComponent } from './maison-bedroom.component';

describe('MaisonBedroomComponent', () => {
  let component: MaisonBedroomComponent;
  let fixture: ComponentFixture<MaisonBedroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonBedroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
