import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor(private http:HttpClient) { }

  getListOfData(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  postdata(){
   // this.http.post("https://jsonplaceholder.typicode.com/posts",data);

  }

  delete(){

  }

  update(){
    
  }
}
