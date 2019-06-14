import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchThemeService {
  activeTheme: string;
  themeChange: Subject<string> = new Subject<string>();
  constructor() {
    this.activeTheme = 'apple';
  }

  public switchTheme(theme) {
    this.activeTheme = theme;
    console.log(this.activeTheme);
    this.themeChange.next(this.activeTheme);
  }
}
