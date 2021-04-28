import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  condition1 = false;
  a = 1;
  students = ['Vishnu', 'Gopu', 'Reshma'];
  constructor() { }

  ngOnInit() {
  }

}
