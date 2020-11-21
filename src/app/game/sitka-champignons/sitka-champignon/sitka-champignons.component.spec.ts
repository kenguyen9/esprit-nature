import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitkaChampignonsComponent } from './sitka-champignons.component';

describe('SitkaChampignonsComponent', () => {
  let component: SitkaChampignonsComponent;
  let fixture: ComponentFixture<SitkaChampignonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitkaChampignonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitkaChampignonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
