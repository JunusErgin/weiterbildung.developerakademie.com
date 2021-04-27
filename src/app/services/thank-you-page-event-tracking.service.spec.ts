import { TestBed } from '@angular/core/testing';

import { ThankYouPageEventTrackingService } from './thank-you-page-event-tracking.service';

describe('ThankYouPageEventTrackingService', () => {
  let service: ThankYouPageEventTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThankYouPageEventTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
