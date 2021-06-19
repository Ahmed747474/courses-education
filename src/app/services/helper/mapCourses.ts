 import { CourseRef, Requests } from 'src/app/model';
 import { CoureseService } from '../courese.service';
 import { Course } from './../../model/course';
 export class CourseHelper {

   constructor(public courseService: CoureseService) {
    }
    /**
     * this mapper add new prop to the course object
     * to help me to  let me know the range of duration course
     * @'param' courseList
     * @returns course list after add new prop DurationCode
     */
 static mapCourse(courseList: Array<Course>) {
    courseList.forEach((element) => {
      if (element.CourseDuration <= 2) {
        element = Object.assign(element, {
          DurationCode: '0',
        });
      } else if (
        element.CourseDuration >= 3 &&
        element.CourseDuration <= 10
      ) {
        element = Object.assign(element, {
          DurationCode: '1',
        });
      } else if (
        element.CourseDuration >= 11 &&
        element.CourseDuration <= 9999
      ) {
        element = Object.assign(element, {
          DurationCode: '2',
        });
      }
    });
    return courseList ;
  }

  /**
   * this helper for fetch specific student coureses from json file
   * becuse we don't have any BE to create an query to return specific request
   * from requests list
   * @'param' requestList
   * @'param' studentId
   * @'param' coursesList
   * @'returns' { courses: studentCourses , PaymentType: paymentType}
   */
  static studentRequestCourses(requestList: Requests[], studentId: number, coursesList: Array<Course>) {
   const studentCourseRef: CourseRef[] = requestList.find((s) => s.StudentId === studentId).Courses ;
   const paymentType = requestList.find((s) => s.StudentId === studentId).PaymentType ;

   const studentCourses: Array<Course> = [] ;
   studentCourseRef.forEach(req => {
    let currentCourse ;
    currentCourse = coursesList.find((course) => course.CourseId === req.CourseId );
    studentCourses.push(currentCourse);
    });
   return { courses: studentCourses , PaymentType: paymentType};
  }
}
