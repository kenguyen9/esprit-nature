import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonCocoComponent } from './maison-coco.component';

describe('MaisonCocoComponent', () => {
  let component: MaisonCocoComponent;
  let fixture: ComponentFixture<MaisonCocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonCocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonCocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
