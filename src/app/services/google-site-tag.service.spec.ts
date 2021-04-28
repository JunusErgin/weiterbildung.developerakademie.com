import { TestBed } from '@angular/core/testing';

import { GoogleSiteTagService } from './google-site-tag.service';

describe('GoogleSiteTagService', () => {
  let service: GoogleSiteTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSiteTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
