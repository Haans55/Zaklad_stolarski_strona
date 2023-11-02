import { TestBed } from '@angular/core/testing';

import { KuchnieService } from './kuchnie.service';

describe('KuchnieService', () => {
  let service: KuchnieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KuchnieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
