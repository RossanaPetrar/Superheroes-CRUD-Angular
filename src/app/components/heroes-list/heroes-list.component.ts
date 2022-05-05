import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../../Hero';
import { catchError, map, NEVER, of, Subscription, switchMap, tap } from 'rxjs';
import { UiHeroListService } from 'src/app/services/ui-hero-list.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroModalComponent } from '../hero-modal/hero-modal.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];

  showHeroList!: boolean;
  subscription: Subscription;

  constructor(
    private heroService: HeroService,
    private uiHeroListService: UiHeroListService,
    private modalService: NgbModal
  ) {
    this.subscription = this.uiHeroListService
      .onToggle()
      .subscribe((value) => (this.showHeroList = value));
  }

  ngOnInit(): void {
    this.heroService
      .getHeroList()
      .subscribe((heroes) => (this.heroes = heroes));
  }

  deleteHero(hero: Hero) {
    this.heroService
      .deleteHero(hero)
      .subscribe(
        () => (this.heroes = this.heroes.filter((h) => h.id !== hero.id))
      );
  }

  addHero(hero: Hero) {
    this.heroService.addHero(hero).subscribe((hero) => this.heroes.push(hero));
  }

  showEditHero(hero: Hero) {
    const modalRef = this.modalService.open(HeroModalComponent);
    modalRef.componentInstance.clonedHero = {
      ...hero,
    };

    modalRef.closed
      .pipe(
        switchMap((updatedHero) => {
          return this.heroService.updateHero(updatedHero);
          // return this.heroService
          //   .updateHero(updatedHero)
          //   .pipe(map(() => updatedHero));
        }),
        tap((updatedHero) => {
          this.heroes = this.heroes.map((h, i, heroes) => {
            if (h.id === updatedHero.id) {
              return updatedHero;
            }
            return h;
          });
        }),
        catchError((err) => {
          alert(err);
          return NEVER;
          // return of(null);
        })
      )
      .subscribe();

    // modalRef.closed.subscribe((updatedHero) => {
    //   this.heroService.updateHero(updatedHero).subscribe(() => {
    // const mappedHeroes = [];

    // for (let index = 0; index < this.heroes.length; index++) {
    //   const currentHero = this.heroes[index];

    //   if (currentHero.id === updatedHero.id) {
    //     mappedHeroes.push(updatedHero);
    //     continue;
    //   }

    //   mappedHeroes.push(currentHero);
    // }
    // console.log(mappedHeroes);

    //   this.heroes = this.heroes.map((h, i, heroes) => {
    //     console.log('map:', { h, i, heroes });
    //     if (h.id === updatedHero.id) {
    //       return updatedHero;
    //     }
    //     return h;
    //   });
    // });
    // });
  }
}
