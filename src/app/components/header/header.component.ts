import { Component, OnInit } from '@angular/core';
import { UiHeroListService } from 'src/app/services/ui-hero-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular Superheroes CRUD';
  showHeroList!: boolean;
  subscription!: Subscription;

  constructor(private uiHeroListService: UiHeroListService) {}

  ngOnInit(): void {}

  toggleHeroesList() {
    this.uiHeroListService.toggleHeroList();
  }
}
