import { Component, OnInit } from '@angular/core';
import { FetchThemeService } from './fetch-theme.service';

// tslint:disable: no-host-metadata-property
@Component({
  selector: 'app-root',
  host: {
    '[class.light-theme]': '( theme === "light" )',
    '[class.dark-theme]': '( theme === "dark" )'
  },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  theme: string;

  constructor(private themeService: FetchThemeService) {
    this.theme = this.themeService.activeTheme;
  }

  ngOnInit() {
    this.themeService.themeChange.subscribe(value => {
      this.theme = value;
    });
  }
}
