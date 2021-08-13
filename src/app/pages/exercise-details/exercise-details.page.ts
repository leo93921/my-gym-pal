import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.page.html',
  styleUrls: ['./exercise-details.page.scss'],
})
export class ExerciseDetailsPage implements OnInit {

  params: Params;
  exerciseBag: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: ExerciseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.exerciseBag = this.exerciseService.getItem(this.params.index);
  }

  public onStart(): void {
    this.router.navigate([`/workout-details/${this.params.index}`]);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
