import { TestBed } from '@angular/core/testing';

import { FreetogamesService } from './freetogames.service';

describe('FreetogamesService', () => {
  let service: FreetogamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreetogamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
