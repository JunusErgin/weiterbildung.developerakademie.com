import { Component, OnInit } from '@angular/core';
import { TrackingserviceService } from '../services/trackingservice.service';
import { FacebookPixelEventTrackerService } from '../services/facebook-pixel-event-tracker.service';
import { TerminCallEventTrackingService } from '../services/termin-call-event-tracking.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  initialSource = 'facebook';

  constructor(private trackingserviceService: TrackingserviceService, private tracking: FacebookPixelEventTrackerService, private trackingTerminCall: TerminCallEventTrackingService) { }

  ngOnInit(): void {
    this.initialSource = this.trackingserviceService.getInitialSource();
    this.tracking.trackEvent('AddToCart');
    this.trackingTerminCall.trackEvent();
  }

}
