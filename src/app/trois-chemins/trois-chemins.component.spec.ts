import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroisCheminsComponent } from './trois-chemins.component';

describe('TroisCheminsComponent', () => {
  let component: TroisCheminsComponent;
  let fixture: ComponentFixture<TroisCheminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroisCheminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroisCheminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
