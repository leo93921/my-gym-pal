import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutPlanningPageRoutingModule } from './workout-planning-routing.module';

import { WorkoutPlanningPage } from './workout-planning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutPlanningPageRoutingModule
  ],
  declarations: [WorkoutPlanningPage]
})
export class WorkoutPlanningPageModule {}
