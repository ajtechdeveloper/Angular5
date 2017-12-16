import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  animations: [
    
        trigger('tasks', [
          transition('* => *', [
    
            query(':enter', style({ opacity: 0 }), {optional: true}),
    
            query(':enter', stagger('250ms', [
              animate('.5s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
              ]))]), {optional: true}),

            query(':leave', stagger('250ms', [
              animate('.5s ease-out', keyframes([
                style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
              ]))]), {optional: true})
          ])
        ])
    
      ]    
})
export class TasksComponent implements OnInit {


    itemCount: number = 4;
    btnText: string = 'Add Task';
    taskText: string = 'A task';
    tasks = [];
  
    constructor(private _information: InformationService) { }
  
    ngOnInit() {
      this._information.task.subscribe(res => this.tasks = res);
      this.itemCount = this.tasks.length;
      this._information.changeTask(this.tasks);
    }
  
    addTask() {
      this.tasks.push(this.taskText);
      this.taskText = '';
      this.itemCount = this.tasks.length;
      this._information.changeTask(this.tasks);
    }

    removeTask(i) {
      this.tasks.splice(i, 1);
      this.taskText = '';
      this.itemCount = this.tasks.length;
      this._information.changeTask(this.tasks);
    }

}
