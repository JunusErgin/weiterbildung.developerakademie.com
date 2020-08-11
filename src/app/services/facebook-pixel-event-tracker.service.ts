import { Injectable } from '@angular/core';

declare const fbq;

@Injectable({
  providedIn: 'root'
})
export class FacebookPixelEventTrackerService {

  constructor() { }

  public trackEvent(event: string) {
    if (typeof fbq === 'undefined') {
      return;
    }
    fbq('track', event);
  }
}