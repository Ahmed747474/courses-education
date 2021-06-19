import { FilteingService } from './../../services/filtering.service';
import { Course } from './../../model/course';
import { Component, OnInit } from '@angular/core';
import { CoureseService } from 'src/app/services/courese.service';
import * as CourseHelper from '../../services/helper/mapCourses';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  constructor(private courseService: CoureseService, private filterService: FilteingService) {}
  courseslist: Course[] = [];
  courseslistFilter = [];
  searchText = '';
  error = '';
  hasError = false ;
  loading$ = true ;
  ngOnInit() {
    this.getCourses();
    this.courseService.filterType$.subscribe((filterData) => {
      this.filterChange(filterData);
      this.loading$ = false ;
    }, (err) => {
      this.loading$ = false ;
      this.hasError = true ;
      this.error = 'there\'s somthing waring!';
    });
   }
  getCourses() {
    this.courseService.getCoursesList().subscribe((data) => {
      this.courseslist = CourseHelper.CourseHelper.mapCourse(data);
      this.courseslistFilter = this.courseslist;
     });
  }
  clearFilter() {
    this.searchText = '';
  }
  filterChange(filterData): void {
    if (filterData.key === 'duration') {
    this.courseslistFilter =  this.filterService.filterByDuration(filterData, this.courseslist);
    } else if (filterData.key === 'category') {
      this.courseslistFilter = this.filterService.filterByCategory(filterData, this.courseslist);
    } else if (filterData.key === 'level') {
      this.courseslistFilter = this.filterService.filterByLevel(filterData, this.courseslist);
    } else {
      this.getCourses();
    }
  }
}
