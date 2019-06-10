import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchThemeService {
  activeTheme: string;
  themeChange: Subject<string> = new Subject<string>();
  constructor() {
    this.activeTheme = 'light';
  }

  switchTheme() {
    this.activeTheme = this.activeTheme === 'light' ? 'dark' : 'light';
    this.themeChange.next(this.activeTheme);
  }
}
