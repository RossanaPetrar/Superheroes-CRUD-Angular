import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-hero-modal',
  templateUrl: './hero-modal.component.html',
  styleUrls: ['./hero-modal.component.css'],
})
export class HeroModalComponent implements OnInit {
  @Input() clonedHero!: Hero;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
