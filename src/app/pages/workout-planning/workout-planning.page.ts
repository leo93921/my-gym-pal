import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-workout-planning',
  templateUrl: './workout-planning.page.html',
  styleUrls: ['./workout-planning.page.scss'],
})
export class WorkoutPlanningPage implements OnInit {

  exerciseBags: any[];
  daysTranslation = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  constructor(
    private exerciseService: ExerciseService
  ) { }

  ngOnInit() {
    this.exerciseBags = this.exerciseService.getAllItems();
  }

  getNumberOfExercises(exerciseBag): number {
    let sum = 0;
    for (let item of exerciseBag.items) {
      sum = sum + item.exercises.length;
    }
    return sum;
  }
}
