import { Injectable } from '@angular/core';

declare let gtag:Function;

@Injectable({
  providedIn: 'root'
})
export class TerminCallEventTrackingService {

  constructor() { }

  public trackEvent(){
    // gtag('event', 'conversion', {'send_to': 'AW-939903939/ffQDCKrIiowCEMOXl8AD'});
    gtag('event', 'conversion', {'send_to': 'AW-939903939/2D5iCJ_G6IsCEMOXl8AD'});
  }
}
