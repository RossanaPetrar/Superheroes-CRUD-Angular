import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiHeroListService {
  private showHeroList: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleHeroList(): void {
    this.showHeroList = !this.showHeroList;
    this.subject.next(this.showHeroList);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
