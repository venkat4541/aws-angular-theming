import { Component, OnInit } from '@angular/core';
import { FetchThemeService } from '../fetch-theme.service';
import { ICON_MAP } from '../home/icon_map.constant';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  activeTheme: string;
  url: string;

  constructor(private themeService: FetchThemeService) {}

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.url = ICON_MAP.apple;
    this.activeTheme = this.themeService.activeTheme;
    this.themeService.themeChange.subscribe(value => {
      this.activeTheme = value;
      this.url = ICON_MAP[value];
    });
  }

}
