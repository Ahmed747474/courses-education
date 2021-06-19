import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '../model';

@Injectable({
  providedIn: 'root',
})
export class CoureseService {

  public filterType$ = new BehaviorSubject<{}>({});
  constructor(private http: HttpClient) {}

  getCoursesList(): Observable<Array<Course>> {
    return this.http.get<Course[]>('courses.json');
  }
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`courses.json/${id}`);
  }


}
