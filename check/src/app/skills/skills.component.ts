import { Component, OnInit } from '@angular/core';
import {trigger , state,style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  dim=[500,500]
  data=[
    {
      "name": "Java",
      "value": 68
    },
    {
      "name": "Kotlin",
      "value": 44
    },
    {
      "name": "Spring",
      "value": 50
    },
    {
      "name": "Hibernate",
      "value": 40
    },
    {
      "name": "MySQL",
      "value": 30
    },
    {
      "name": "AS400",
      "value": 40
    },
    {
      "name": "HTML & CSS",
      "value": 40
    },
    {
      "name": "Angular",
      "value": 20
    },
    {
      "name": "French",
      "value": 30
    }
  ]
  constructor() { }
  
  ngOnInit() {
  }

}
