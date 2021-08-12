import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Insomnia } from '@ionic-native/insomnia/ngx';

import { ExerciseDetailsPageRoutingModule } from './exercise-details-routing.module';
import { ExerciseDetailsPage } from './exercise-details.page';
import { TimedPanelComponent } from '../../components/timed-panel/timed-panel.component';
import { RepeatitionPanelComponent } from '../../components/repeatition-panel/repeatition-panel.component';
import { CompletionPanelComponent } from '../../components/completion-panel/completion-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseDetailsPageRoutingModule
  ],
  declarations: [
    ExerciseDetailsPage,
    TimedPanelComponent,
    RepeatitionPanelComponent,
    CompletionPanelComponent
  ],
  providers: [Insomnia]
})
export class ExerciseDetailsPageModule { }
