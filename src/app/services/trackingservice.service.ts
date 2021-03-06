import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingserviceService {

  constructor() { }


  getInitialSource() {
    let url = window.location.href;

    if (localStorage.getItem('initialSource')) {
      return localStorage.getItem('initialSource');
    }

    let initialSource = 'facebook';

    if (url.endsWith('/g') || url.endsWith('/g/') || url.endsWith('/info') || url.endsWith('/info/')) {
      initialSource = 'google';
    } else if (url.endsWith('/y') || url.endsWith('/y/')) {
      initialSource = 'youtube';
    }
    else if (url.endsWith('/ya') || url.endsWith('/ya/')) {
      initialSource = 'youtube-ads';
    }
    else if (url.endsWith('/t') || url.endsWith('/t/')) {
      initialSource = 'tiktok';
    }

    return initialSource;
  }

  saveInitialSource() {
    localStorage.setItem('initialSource', this.getInitialSource());
  }

}
