import { ExampleService } from './example.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleService } from './../sample.service';
import { HttpClientModule } from '@angular/common/http';
import { DemoNgZorroAntdModule } from './../../ng-zorro-antd.module';
import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TestApiCallComponent } from './test-api-call/test-api-call.component';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    DemoNgZorroAntdModule,
    CommonModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule
  ],
  declarations: [WelcomeComponent, AddStudentComponent, EmployeeListComponent, TestApiCallComponent],
  exports: [WelcomeComponent],
  providers: [SampleService, ExampleService]
})
export class WelcomeModule { }
