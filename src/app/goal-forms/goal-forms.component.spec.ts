import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalFormsComponent } from './goal-forms.component';

describe('GoalFormsComponent', () => {
  let component: GoalFormsComponent;
  let fixture: ComponentFixture<GoalFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
