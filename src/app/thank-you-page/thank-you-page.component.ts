import { Component, OnInit } from '@angular/core';
import { FacebookPixelEventTrackerService } from '../services/facebook-pixel-event-tracker.service';
import { ThankYouPageEventTrackingService } from '../services/thank-you-page-event-tracking.service';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent implements OnInit {

  constructor(private tracking: FacebookPixelEventTrackerService, private trackingThankYouPage: ThankYouPageEventTrackingService) { }

  ngOnInit(): void {
    this.tracking.trackEvent('CompleteRegistration');
    this.trackingThankYouPage.trackEvent();
  }

}
