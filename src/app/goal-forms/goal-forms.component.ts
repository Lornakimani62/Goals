import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal-forms',
  templateUrl: './goal-forms.component.html',
  styleUrls: ['./goal-forms.component.css']
})
export class GoalFormsComponent implements OnInit {
  newGoal=new Goal(0,"","",new Date());
  @Output() addGoal=new EventEmitter<Goal>();
    
  submitGoal(){
    this.addGoal.emit(this.newGoal);
}
  constructor() { }

  ngOnInit() {
  }

}
