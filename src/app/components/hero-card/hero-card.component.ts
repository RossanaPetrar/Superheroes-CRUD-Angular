import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;
  @Output() delete: EventEmitter<Hero> = new EventEmitter();
  @Output() edit: EventEmitter<Hero> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.delete.emit(this.hero);
  }

  onEdit() {
    this.edit.emit(this.hero);
  }
}
