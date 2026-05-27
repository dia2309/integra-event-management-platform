import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs'; // 1. Import Observable
import { Event } from '../../shared/models/event.model';
import { EventService } from '../../shared/services/event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  events$: Observable<Event[]>;

  constructor(private eventService: EventService) {
    this.events$ = this.eventService.getEvents();
  }

}
