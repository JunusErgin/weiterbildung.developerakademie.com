import { TestBed } from '@angular/core/testing';

import { TerminCallEventTrackingService } from './termin-call-event-tracking.service';

describe('TerminCallEventTrackingService', () => {
  let service: TerminCallEventTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminCallEventTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
