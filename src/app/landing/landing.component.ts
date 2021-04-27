import { Component, OnInit } from '@angular/core';
import { FacebookPixelEventTrackerService } from '../services/facebook-pixel-event-tracker.service';
import { SeiteCallEventTrackingService } from '../services/seite-call-event-tracking.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private tracking: FacebookPixelEventTrackerService, private trackingSeiteCall: SeiteCallEventTrackingService) { }

  ngOnInit(): void {
    this.tracking.trackEvent('ViewContent');
    this.trackingSeiteCall.trackEvent();
  }

}
