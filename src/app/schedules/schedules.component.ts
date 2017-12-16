import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
  animations: [
    
        trigger('schedules', [
          transition('* => *', [
    
            query(':enter', style({ opacity: 0 }), {optional: true}),
    
            query(':enter', stagger('250ms', [
              animate('.5s step-start', keyframes([
                style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
              ]))]), {optional: true}),

            query(':leave', stagger('250ms', [
              animate('.5s step-end', keyframes([
                style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
              ]))]), {optional: true})
          ])
        ])
    
      ]
})
export class SchedulesComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add Schedule';
  scheduleText: string = 'A schedule';
  schedules = [];
  tasks: any

  constructor(private route: ActivatedRoute,private router: Router, private _information: InformationService) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._information.schedule.subscribe(res => this.schedules = res);
    this.itemCount = this.schedules.length;
    this._information.changeSchedule(this.schedules);
    this._information.task.subscribe(res => this.tasks = res);
  }

  addSchedule() {
    this.schedules.push(this.scheduleText);
    this.scheduleText = '';
    this.itemCount = this.schedules.length;
    this._information.changeSchedule(this.schedules);
  }

  removeSchedule(i) {
    this.schedules.splice(i, 1);
    this.scheduleText = '';
    this.itemCount = this.schedules.length;
    this._information.changeSchedule(this.schedules);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
