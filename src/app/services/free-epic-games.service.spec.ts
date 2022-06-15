import { TestBed } from '@angular/core/testing';

import { FreeEpicGamesService } from './free-epic-games.service';

describe('FreeEpicGamesService', () => {
  let service: FreeEpicGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeEpicGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
