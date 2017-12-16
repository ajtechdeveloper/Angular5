import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class InformationService {

  private tasks = new BehaviorSubject<any>(['The first task', 'Another task']);
  task = this.tasks.asObservable();

  private schedules = new BehaviorSubject<any>(['The first schedule', 'Another schedule']);
  schedule = this.schedules.asObservable();

  constructor() { }

  changeTask(task) {
    this.tasks.next(task)
  }

  changeSchedule(schedule) {
    this.schedules.next(schedule)
  }

}
