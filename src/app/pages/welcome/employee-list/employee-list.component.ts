import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SampleService } from '../../sample.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  empList: any;
  form: FormGroup;
  constructor(private sampleService: SampleService,
              private fb: FormBuilder) {

    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
    });

  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.sampleService.getEmplList().subscribe(s => {
      this.empList = s;
    });
  }
  // tslint:disable-next-line: typedef
  submitForm() {
    console.log('Ans', this.form.value);
  }

}
