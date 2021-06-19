import { Course } from './../../model/course';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-base',
  templateUrl: './course-base.component.html',
  styleUrls: ['./course-base.component.scss']
})
export class CourseBaseComponent implements OnInit {
  @Input() course: Course;
  @Input() paymentType?: string;


  constructor() { }

  ngOnInit() {
   }

}
