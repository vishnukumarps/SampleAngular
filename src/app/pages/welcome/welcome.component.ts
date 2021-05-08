import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  condition1 = false;
  isVisible = false;
  a = 1;
  students = ['Vishnu', 'Gopu', 'Reshma'];

  employees = [
    {
      name: 'Vishnu',
      place: 'Alappuzha',
      mob: '7736177715'
    },
    {
      name: 'Reshma',
      place: 'Calicut',
      mob: '7736177715'
    },
    {
      name: 'Gopu',
      place: 'Kollam',
      mob: '7736177715'
    },


  ];

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
