import { TestBed } from '@angular/core/testing';

import { PathogenService } from './pathogen.service';

describe('PathogenService', () => {
  let service: PathogenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathogenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
