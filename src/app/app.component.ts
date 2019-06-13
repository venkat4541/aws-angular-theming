import { Component, OnInit } from '@angular/core';
import { FetchThemeService } from './fetch-theme.service';

// tslint:disable: no-host-metadata-property
@Component({
  selector: 'app-root',
  host: {
    '[class.apple-theme]': '( theme === "apple" )',
    '[class.amazon-theme]': '( theme === "amazon" )',
    '[class.facebook-theme]': '( theme === "facebook" )',
    '[class.microsoft-theme]': '( theme === "microsoft" )',
    '[class.linkedin-theme]': '( theme === "linkedin" )',
    '[class.snapchat-theme]': '( theme === "snapchat" )',
    '[class.youtube-theme]': '( theme === "youtube" )',
    '[class.spotify-theme]': '( theme === "spotify" )'
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
