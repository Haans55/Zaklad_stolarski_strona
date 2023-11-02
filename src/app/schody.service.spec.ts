import { TestBed } from '@angular/core/testing';

import { SchodyService } from './schody.service';

describe('SchodyService', () => {
  let service: SchodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
