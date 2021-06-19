import { Student } from './../model/student';
import { Requests } from 'src/app/model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
  // this for fake data if we have real api we will use the studetId like
  // `url/request/${studentId}`
  getStudentCourses(studentId: number): Observable<Array<Requests>> {
    return this.http.get<Requests[]>(`requests.json`);
  }
  getStudentProfile(studentId: number): Observable<Array<Student>> {
    return this.http.get<Student[]>(`students.json`);

  }

}
