import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timed-panel',
  templateUrl: './timed-panel.component.html',
  styleUrls: ['./timed-panel.component.scss'],
})
export class TimedPanelComponent implements OnInit, OnChanges {

  countdownValue = 30;
  timer: any;
  @Input() currentExercise: any;
  @Output() exerciseCompleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    clearInterval(this.timer);
    this.handleExercise(this.currentExercise);
  }

  private handleExercise(exercise): void {
    if (this.currentExercise.time) {
      this.countdownValue = this.currentExercise.time;

      this.timer = setInterval(() => {
        if (this.countdownValue <= 0) {
          clearInterval(this.timer);
          this.exerciseCompleted.emit();
        } else {
          this.countdownValue = this.countdownValue - 1;
        }
      }, 1000);
    }
  }

  completeExercise(): void {
    clearInterval(this.timer);
    this.exerciseCompleted.emit();
  }

}
