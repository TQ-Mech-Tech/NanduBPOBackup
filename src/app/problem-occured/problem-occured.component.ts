import { Component, OnInit } from '@angular/core';
// import 'animate.min.css';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-problem-occured',
  templateUrl: './problem-occured.component.html',
  styleUrls: ['./problem-occured.component.scss'],
  animations: [
    trigger('enabledStateChange', [
      state(
        'default',
        style({
          opacity: 1,
        })
      ),
      state(
        'disabled',
        style({
          
        })
      ),
      transition('* => *', animate('300ms ease-out')),
    ])
  ]
})
export class ProblemOccuredComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
