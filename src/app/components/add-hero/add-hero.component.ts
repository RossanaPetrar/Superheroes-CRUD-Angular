import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../Hero';
import { Subscription } from 'rxjs';
import { UiHeroListService } from 'src/app/services/ui-hero-list.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent implements OnInit {
  @Output() onAddHero: EventEmitter<Hero> = new EventEmitter();

  lastName!: string;
  firstName!: string;
  heroName!: string;
  image!: string;
  showHeroList!: boolean;
  subscription: Subscription;

  constructor(private uiHeroListService: UiHeroListService) {
    this.subscription = this.uiHeroListService
      .onToggle()
      .subscribe((value) => (this.showHeroList = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.heroName) {
      alert('Please add a hero name!');
      return;
    }
    const newHero = {
      lastName: this.lastName,
      firstName: this.firstName,
      heroName: this.heroName,
      image: this.image,
    };

    this.onAddHero.emit(newHero);

    this.lastName = '';
    this.firstName = '';
    this.heroName = '';
    this.image = '';
  }
}
