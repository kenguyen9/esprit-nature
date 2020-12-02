import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonQuestComponent } from './maison-quest.component';

describe('MaisonQuestComponent', () => {
  let component: MaisonQuestComponent;
  let fixture: ComponentFixture<MaisonQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
