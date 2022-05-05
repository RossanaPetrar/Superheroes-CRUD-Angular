import { TestBed } from '@angular/core/testing';

import { UiHeroListService } from './ui-hero-list.service';

describe('UiHeroListService', () => {
  let service: UiHeroListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiHeroListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
