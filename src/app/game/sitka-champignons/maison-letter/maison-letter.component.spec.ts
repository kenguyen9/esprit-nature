import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonLetterComponent } from './maison-letter.component';

describe('MaisonLetterComponent', () => {
  let component: MaisonLetterComponent;
  let fixture: ComponentFixture<MaisonLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
