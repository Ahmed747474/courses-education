import { Requests } from 'src/app/model';
import { Course } from './../../../model/course';
import { StudentService } from './../../../services/student.service';
import { CoureseService } from 'src/app/services/courese.service';
import { Component, OnInit } from '@angular/core';
import * as CourseHelper from '../../../services/helper/mapCourses';

@Component({
  selector: 'app-student-request',
  templateUrl: './student-request.component.html',
  styleUrls: ['./student-request.component.scss'],
})
export class StudentRequestComponent implements OnInit {
  courseslist: Course[] = [];
  coursesListForStudent: Course[] = [];
  paymentType = '';
  helperResult = { courses: [], PaymentType: '' };
  constructor(
    private coureseService: CoureseService,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.getAllCourses();
    this.getStudentRequests();
  }

  getAllCourses() {
    this.coureseService.getCoursesList().subscribe((c) => {
      this.courseslist = c;
    });
  }

  getStudentRequests() {
    // **
    // static id becuse we don't have any BE to create an qurey to fetch specific data
    // for this reson i implement this  studentRequestCourses helper to help me
    // to fetch specific student request from json file */
    this.studentService.getStudentCourses(1233).subscribe((req: Requests[]) => {
      this.helperResult = CourseHelper.CourseHelper.studentRequestCourses(
        req,
        1233,
        this.courseslist
      );
      this.paymentType = this.helperResult.PaymentType;
      this.coursesListForStudent = this.helperResult.courses;
    });
  }
}
