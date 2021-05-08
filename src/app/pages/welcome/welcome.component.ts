import { SampleService } from './../sample.service';
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
  empList: any;
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

  // tslint:disable-next-line: typedef
  show() {
    this.isVisible = true;
  }

  // tslint:disable-next-line: typedef
  hide() {
    this.isVisible = false;
  }
  constructor(private sampleService: SampleService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.sampleService.getEmplList().subscribe(s => {
      this.empList = s;
    });
  }
}
