import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseService } from '../services/exercise.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private exercises: any[];
  todayDate = new Date();

  constructor(
    private exerciseService: ExerciseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.exercises = this.exerciseService.getItemForSpecificDay(this.todayDate.getDay());
  }

  getListHeader(exercises: any[]): string {
    return ((exercises.filter((ex) => { return ex.type != "REST" })).map(ex => ex.name)).join(", ");
  }

  getListDescription(exercises: any[]): string {
    let descriptors = [];
    for (let ex of exercises) {
      if (ex.type != "REST") {
        if (ex.reps) {
          descriptors.push(ex.reps + "x");
        }
        if (ex.time) {
          descriptors.push(ex.time + "sec");
        }
      }
    }
    return descriptors.join(", ");
  }

  goToDetails(item) {
    this.router.navigate(['/exercise-details/', this.todayDate.getDay(), this.exercises.indexOf(item)]);
  }

}
