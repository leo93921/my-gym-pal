import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutPlanningPage } from './workout-planning.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutPlanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutPlanningPageRoutingModule {}
