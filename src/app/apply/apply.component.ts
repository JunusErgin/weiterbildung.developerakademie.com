import { Component, OnInit } from '@angular/core';
import { TrackingserviceService } from '../services/trackingservice.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  initialSource = 'facebook';

  constructor(private trackingserviceService: TrackingserviceService) { }

  ngOnInit(): void {
    this.initialSource = this.trackingserviceService.getInitialSource();
  }

}
