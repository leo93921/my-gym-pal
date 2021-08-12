import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-repeatition-panel',
  templateUrl: './repeatition-panel.component.html',
  styleUrls: ['./repeatition-panel.component.scss'],
})
export class RepeatitionPanelComponent implements OnInit {

  @Input() currentExercise: any;
  @Output() exerciseCompleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

}
