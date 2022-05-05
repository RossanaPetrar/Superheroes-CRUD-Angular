import { Component } from '@angular/core';
import { UiHeroListService } from './services/ui-hero-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular Superheroes CRUD';
}
