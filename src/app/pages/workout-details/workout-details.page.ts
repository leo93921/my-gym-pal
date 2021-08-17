import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { Platform } from '@ionic/angular';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.page.html',
  styleUrls: ['./workout-details.page.scss'],
})
export class WorkoutDetailsPage implements OnInit, OnDestroy {

  private exerciseBag: any;
  repsToDo = -1;
  doneWithAll = false;
  currentExercise = null;
  dayOfWeek: number;

  private exercisesToDo = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exerciseService: ExerciseService,
    private insomnia: Insomnia,
    private platform: Platform
  ) { }

  ngOnInit() {
    let params = this.route.snapshot.params;
    this.dayOfWeek = params.dayOfWeek;
    const exerciseBagContainer = this.exerciseService.getItemForSpecificDay(this.dayOfWeek);
    this.exerciseBag = exerciseBagContainer[params.index];

    for (let i = 0; i < this.exerciseBag.reps; i++) {
      for (let exercise of this.exerciseBag.exercises) {
        this.exercisesToDo.push(JSON.parse(JSON.stringify(exercise)));
      }
      if (i != this.exerciseBag.reps - 1)
        if (this.exerciseBag.rest) {
          this.exercisesToDo.push({
            name: "Rest",
            type: "REST",
            time: this.exerciseBag.rest
          });
        }
      this.exercisesToDo.push({
        type: "SEPARATOR"
      });
    }
    this.startWorkout();
  }

  ngOnDestroy(): void {
    if (this.platform.is("cordova")) {
      this.insomnia.allowSleepAgain().then(
        () => { console.log("Device sleep allowed again") },
        (err) => console.log(err)
      );
    }
  }

  startWorkout() {
    if (this.platform.is("cordova")) {
      this.insomnia.keepAwake().then(() => {
        console.log("Device won't sleep")
        this.startExercises();
      })
        .catch(err => { console.error("Unable to run insomnia"); console.error(err); });
    } else {
      this.startExercises()
    }
  }

  private startExercises(): void {

    if (this.repsToDo == -1) {
      this.repsToDo = this.exerciseBag.reps;
    } else {
      this.repsToDo = this.repsToDo - 1;
      this.currentExercise = null;
    }

    if (this.repsToDo == 0) {
      // Done all
      this.doneWithAll = true;
      return;
    }

    this.nextExercise();

  }

  nextExercise(): void {
    let currentExerciseIndex = this.exercisesToDo.indexOf(this.currentExercise);

    if (currentExerciseIndex != -1) {
      this.exercisesToDo[currentExerciseIndex].done = true;
    }

    currentExerciseIndex = currentExerciseIndex + 1;
    if (currentExerciseIndex < this.exercisesToDo.length) {
      this.currentExercise = this.exercisesToDo[currentExerciseIndex];
      if (this.currentExercise.type == "SEPARATOR") {
        this.nextExercise();
      }
    } else {
      this.doneWithAll = true
    }
  }

  goBack() {
    this.router.navigate(['/exercise-list', this.dayOfWeek]);
  }
}
