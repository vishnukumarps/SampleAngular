import { TestApiCallComponent } from './test-api-call/test-api-call.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'test', component: TestApiCallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
