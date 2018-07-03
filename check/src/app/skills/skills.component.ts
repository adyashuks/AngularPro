import { Component, OnInit } from '@angular/core';
import {trigger , state,style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform : 'scale(1)',
      })),
      state('large', style({
        transform : 'scale(1.5)',
      })),
      transition('small<=> large',animate('300ms ease-in')),
    ]),
  ]
})
export class SkillsComponent implements OnInit {
  state : string ='smalll'
  constructor() { }
  
  ngOnInit() {
  }
      animateMe(){
        this.state=(this.state==='small' ? 'large' :'small')
      }

}
