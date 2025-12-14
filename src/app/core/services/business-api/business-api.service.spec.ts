import { TestBed } from '@angular/core/testing';

import { BusinessApiService } from './business-api.service';

describe('BusinessApiService', () => {
  let service: BusinessApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
