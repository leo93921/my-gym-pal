import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.page.html',
  styleUrls: ['./exercise-list.page.scss'],
})
export class ExerciseListPage implements OnInit {

  params: Params
  exerciseList: any[];

  constructor(
    private route: ActivatedRoute,
    private exerciseService: ExerciseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.exerciseList = this.exerciseService.getItemForSpecificDay(this.params.dayOfWeek);
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
    this.router.navigate(['/exercise-details/' + this.exerciseList.indexOf(item)]);
  }
}
