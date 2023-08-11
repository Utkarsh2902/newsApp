import { TestBed } from '@angular/core/testing';

import { ApitwoService } from './apitwo.service';

describe('ApitwoService', () => {
  let service: ApitwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApitwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
