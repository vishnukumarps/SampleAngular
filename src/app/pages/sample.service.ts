import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) {

  }

  // tslint:disable-next-line: typedef
  getEmplList() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // tslint:disable-next-line: typedef
  addEmployee(data: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
