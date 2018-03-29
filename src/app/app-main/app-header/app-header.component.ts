import { Component, OnInit, Inject, InjectionToken } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  constructor(@Inject('APP_CONFIG') config) {
    const { APP_URL, SERVER_URL } = config;
    console.log(APP_URL);
    console.log(SERVER_URL);
  }

  ngOnInit() {}
}
