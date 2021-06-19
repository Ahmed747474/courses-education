import { Injectable } from '@angular/core';
import { Course } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FilteingService {

  filterSelected = {
    DurationCode: [],
    CourseCategory: [],
    CourseLevel: [],
  };
  courseslistFilter = [];

constructor() {

}
filterByDuration(filterData, courseslist): Array<Course> {
   if (filterData.state) {
    this.filterSelected.DurationCode.push(filterData.duractionCode);
  } else {
    this.filterSelected.DurationCode = this.filterSelected.DurationCode.filter(
      (item) => {
        return item !== filterData.duractionCode;
      }
    );
  }

   if (this.filterSelected.DurationCode.length > 0) {
      this.courseslistFilter = this.ApplayFilterSelection(
      courseslist,
      this.filterSelected
    );
  } else {
     this.courseslistFilter = courseslist;
     this.courseslistFilter = this.ApplayFilterSelection(
       this.courseslistFilter,
       this.filterSelected
      );
  }
   return this.courseslistFilter;

}
filterByCategory(filterData, courseslist): Array<Course> {
  if (filterData.state) {
    this.filterSelected.CourseCategory.push(filterData.code);
  } else {
    this.filterSelected.CourseCategory = this.filterSelected.CourseCategory.filter(
      (item) => {
        return item !== filterData.code;
      }
    );
  }
  if (this.filterSelected.CourseCategory.length > 0) {
       this.courseslistFilter = this.ApplayFilterSelection(
      courseslist,
      this.filterSelected
    );
   } else {
     this.courseslistFilter = courseslist;
     this.courseslistFilter = this.ApplayFilterSelection(
        this.courseslistFilter,
        this.filterSelected
      );
  }
  return this.courseslistFilter;
}

filterByLevel(filterData, courseslist): Array<Course> {
  if (filterData.state) {
    this.filterSelected.CourseLevel.push(filterData.code);
  } else {
    this.filterSelected.CourseLevel = this.filterSelected.CourseLevel.filter((item) => {
      return item !== filterData.code;
    });
    this.courseslistFilter = courseslist;
  }

  if (this.filterSelected.CourseLevel.length > 0) {
      this.courseslistFilter = this.ApplayFilterSelection(
      courseslist,
      this.filterSelected
    );
  } else {
      this.courseslistFilter = courseslist;
      this.courseslistFilter = this.ApplayFilterSelection(
        this.courseslistFilter,
        this.filterSelected
      );
  }
  return this.courseslistFilter;

}

private ApplayFilterSelection(array, filters) {
  const filterKeys = Object.keys(filters);
  return array.filter((item) => {
    // validates all filter criteria
    return filterKeys.every((key) => {
      // ignores an empty filter
      if (!filters[key].length) {
        return true;
      }
      return filters[key].find((filter) => filter === item[key]);
    });
  });
}
}
