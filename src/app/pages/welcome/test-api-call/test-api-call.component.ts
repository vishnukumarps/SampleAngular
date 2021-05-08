import { ExampleService } from './../example.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-api-call',
  templateUrl: './test-api-call.component.html',
  styleUrls: ['./test-api-call.component.css']
})
export class TestApiCallComponent implements OnInit {

  constructor(private example:ExampleService) { }
    sampleList:any;
  
    ngOnInit(): void {

  this.example.getListOfData().subscribe(a=>{
    this.sampleList=a;
  });
  }

}
