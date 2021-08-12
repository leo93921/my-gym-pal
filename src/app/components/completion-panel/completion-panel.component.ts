import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-completion-panel',
  templateUrl: './completion-panel.component.html',
  styleUrls: ['./completion-panel.component.scss'],
})
export class CompletionPanelComponent implements OnInit {

  @Output() exerciseCompleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

}
