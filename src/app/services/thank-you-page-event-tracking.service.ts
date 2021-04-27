import { Injectable } from '@angular/core';

declare let gtag:Function;

@Injectable({
  providedIn: 'root'
})
export class ThankYouPageEventTrackingService {

  constructor() { }

  public trackEvent(){
    gtag('event', 'conversion', {'send_to': 'AW-939903939/D6csCPnP6IsCEMOXl8AD'});
  }
}
