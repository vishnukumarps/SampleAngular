import { DemoNgZorroAntdModule } from './../../ng-zorro-antd.module';
import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    DemoNgZorroAntdModule,
    CommonModule],
  declarations: [WelcomeComponent, AddStudentComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
