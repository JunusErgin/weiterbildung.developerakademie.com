import { Component, OnInit } from '@angular/core';
import { FacebookPixelEventTrackerService } from '../services/facebook-pixel-event-tracker.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private tracking: FacebookPixelEventTrackerService) { }

  ngOnInit(): void {
    this.tracking.trackEvent('ViewContent');
  }

}
