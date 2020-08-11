import { Component, OnInit } from '@angular/core';
import { FacebookPixelEventTrackerService } from '../services/facebook-pixel-event-tracker.service';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent implements OnInit {

  constructor(private tracking: FacebookPixelEventTrackerService) { }

  ngOnInit(): void {
    this.tracking.trackEvent('CompleteRegistration');
  }

}
