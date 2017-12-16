import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InformationService } from './information.service';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SchedulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
