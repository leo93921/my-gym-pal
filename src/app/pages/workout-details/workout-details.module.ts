import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutDetailsPageRoutingModule } from './workout-details-routing.module';

import { WorkoutDetailsPage } from './workout-details.page';
import { CompletionPanelComponent } from 'src/app/components/completion-panel/completion-panel.component';
import { RepeatitionPanelComponent } from 'src/app/components/repeatition-panel/repeatition-panel.component';
import { TimedPanelComponent } from 'src/app/components/timed-panel/timed-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutDetailsPageRoutingModule
  ],
  declarations: [
    WorkoutDetailsPage,
    CompletionPanelComponent,
    RepeatitionPanelComponent,
    TimedPanelComponent
  ],
  providers: []
})
export class WorkoutDetailsPageModule { }
