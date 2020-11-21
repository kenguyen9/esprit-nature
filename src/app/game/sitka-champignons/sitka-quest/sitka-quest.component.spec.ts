import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitkaQuestComponent } from './sitka-quest.component';

describe('SitkaQuestComponent', () => {
  let component: SitkaQuestComponent;
  let fixture: ComponentFixture<SitkaQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitkaQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitkaQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
