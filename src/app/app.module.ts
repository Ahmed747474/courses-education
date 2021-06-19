import { StudentRequestComponent } from './components/student/student-request/student-request.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { StudentService } from './services/student.service';
import { MbscModule } from '@mobiscroll/angular';
import { FilteingService } from './services/filtering.service';
import { APIInterceptor } from './services/api.interceptor';
import { RecentUpdatesComponent } from './components/recent-updates/recent-updates.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CourseBaseComponent } from './components/course-base/course-base.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoureseService } from './services/courese.service';
import { FilterPipe } from './services/filter.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './shared/app.routes';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
 ]);
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CourseBaseComponent,
    CoursesListComponent,
    TodoComponent,
    HomeComponent,
    FilterComponent,
    RecentUpdatesComponent,
    FilterPipe,
    StudentProfileComponent,
    StudentRequestComponent
  ],
  imports: [
    MbscModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    RouterModule.forRoot(routes),

   ],
  providers: [CoureseService, {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  }, FilteingService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
