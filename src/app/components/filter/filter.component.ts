import { Filters } from './../../model/filter';
import { CoureseService } from 'src/app/services/courese.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filters =  new Filters() ;


  constructor(private courseService: CoureseService) {
    this.filters.duration =
    [
      { key: 'duration', name: 'Less Than 2 Hours', code: 'less2', cheked: false, duractionCode: '0' },
      {key: 'duration', name: 'From 2 to 10 hours', code: 'from2to10', cheked: false, duractionCode: '1' },
      {key: 'duration', name: 'More Than 10', code: 'more10', cheked: false, duractionCode: '2' },
    ] ;
    this.filters.category = [
      {key: 'category', name: 'Math', code: 'math', cheked: false },
      { key: 'category', name: 'Islamic', code: 'islamic', cheked: false },
      { key: 'category', name: 'Arabic', code: 'arabic', cheked: false },
      {key: 'category', name: 'Development', code: 'development', cheked: false },
      { key: 'category', name: 'IT & Software', code: 'software', cheked: false },
     ];
    this.filters.level = [
      {key: 'level', name: 'Beginner', code: 'beginner', cheked: false },
      { key: 'level', name: 'Intermediate', code: 'intermediate', cheked: false },
      { key: 'level', name: 'Expert', code: 'expert', cheked: false },
      ];
  }
  ngOnInit() {}

  filterChange(keys, codes , $event, duration? ): void {
    // tslint:disable-next-line:no-debugger
   this.courseService.filterType$.next({key: keys , code: codes , state: $event, duractionCode: duration});
  }
}
