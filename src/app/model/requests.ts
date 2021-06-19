export class Requests {
  StudentId: number;
  RequestDate: string;
  TeachrId: string;
  Courses: CourseRef[];
  PaymentType: string;
}

export interface CourseRef {
  CourseId?: number;
  Member?: number;
}
