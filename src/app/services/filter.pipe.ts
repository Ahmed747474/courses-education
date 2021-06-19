import { Course } from './../model/course';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Course[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    console.log(items , searchText );
    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return it.CourseName.toLowerCase().includes(searchText);
    });
  }
}
