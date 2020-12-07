import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerpentSacreComponent } from './serpent-sacre.component';

describe('SerpentSacreComponent', () => {
  let component: SerpentSacreComponent;
  let fixture: ComponentFixture<SerpentSacreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerpentSacreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerpentSacreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
