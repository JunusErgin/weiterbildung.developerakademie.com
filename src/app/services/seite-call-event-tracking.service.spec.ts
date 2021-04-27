import { TestBed } from '@angular/core/testing';

import { SeiteCallEventTrackingService } from './seite-call-event-tracking.service';

describe('SeiteCallEventTrackingService', () => {
  let service: SeiteCallEventTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeiteCallEventTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
