import { Component, OnInit } from '@angular/core';
import { FetchThemeService } from '../fetch-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private themeService: FetchThemeService
  ) { }

  ngOnInit() {
  }

  public switchTheme(theme) {
    this.themeService.switchTheme(theme);
  }

}
