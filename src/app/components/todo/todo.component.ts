import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  CalendarOptions } from '@fullcalendar/core';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent  } from '@mobiscroll/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  constructor(private http: HttpClient, private notify: Notifications) { }
  myEvents: MbscCalendarEvent[] = [];


  eventSettings: MbscEventcalendarOptions = {
      theme: 'ios',
      themeVariant: 'dark',
      clickToCreate: true,
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      view: {
          schedule: { type: 'day' },

      },
      onEventClick: (event) => {
        this.notify.toast({
          message: event.event.title
      });
      }
  };
  ngOnInit() {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
  });
  }



}
