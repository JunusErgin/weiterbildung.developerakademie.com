import { TestBed } from '@angular/core/testing';

import { TrackingserviceService } from './trackingservice.service';

describe('TrackingserviceService', () => {
  let service: TrackingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
