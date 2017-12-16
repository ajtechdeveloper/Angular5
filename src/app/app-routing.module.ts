import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component'; 
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent
  },
  {
    path: 'schedules/:id',
    component: SchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
