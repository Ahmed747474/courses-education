import { Student } from './../../../model/student';
import { StudentService } from './../../../services/student.service';
import { CoureseService } from 'src/app/services/courese.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
studnet: Student ;
  constructor(private coureseService: CoureseService, private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudentProfile(1233).subscribe((res) => {
      this.studnet = res.find((student) => student.Id === 1233) ;
      console.log(res.find((student) => student.Id === 1233));
    });
  }

}
