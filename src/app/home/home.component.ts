import { Component, OnInit } from '@angular/core';
import { FetchThemeService } from '../fetch-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private themeService: FetchThemeService) {}

  ngOnInit() {
    this.themeService.switchTheme('colorful');
  }

}
