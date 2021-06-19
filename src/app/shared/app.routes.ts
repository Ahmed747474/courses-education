import { StudentRequestComponent } from './../components/student/student-request/student-request.component';
import { HomeComponent } from './../components/home/home.component';
import { Routes } from '@angular/router';
import { StudentProfileComponent } from '../components/student/student-profile/student-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'my-profile',
    component: StudentProfileComponent
  },
  {
    path: 'my-courses-requests',
    component: StudentRequestComponent
  },

];
