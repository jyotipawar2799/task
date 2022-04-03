import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl='http://localhost:3000/';
  
  constructor(private http: HttpClient) { }

  addStudent(data: any){
    return this.http.post(this.apiUrl+'student',data);
  }
  studentList(){
    return this.http.get(this.apiUrl+'student');
  }
}
