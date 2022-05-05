import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-heroes-button',
  templateUrl: './get-heroes-button.component.html',
  styleUrls: ['./get-heroes-button.component.css'],
})
export class GetHeroesButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
