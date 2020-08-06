import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackingserviceService } from './services/trackingservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private trackingserviceService: TrackingserviceService) {

  }

  ngOnInit() {
    this.trackingserviceService.saveInitialSource();
  }

}
