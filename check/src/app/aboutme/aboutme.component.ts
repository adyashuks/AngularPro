import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  dim=[500,450]
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
  on() {
    document.getElementById("overlay").style.display = "block";
}

off() {
    document.getElementById("overlay").style.display = "none";
}

}
