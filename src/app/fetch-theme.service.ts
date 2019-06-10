import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchThemeService {

  constructor() { }

  switchTheme(newTheme) {
    console.log('newTheme: ', newTheme);
  }
}
