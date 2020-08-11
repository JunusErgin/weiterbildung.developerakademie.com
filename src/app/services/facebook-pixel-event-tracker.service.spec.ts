import { TestBed } from '@angular/core/testing';

import { FacebookPixelEventTrackerService } from './facebook-pixel-event-tracker.service';

describe('FacebookPixelEventTrackerService', () => {
  let service: FacebookPixelEventTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookPixelEventTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
