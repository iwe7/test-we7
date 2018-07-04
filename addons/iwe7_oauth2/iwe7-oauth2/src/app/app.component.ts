import { Iwe7Util2Service } from 'iwe7-util2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(util: Iwe7Util2Service) {
    util.setM('iwe7_oauth2');
  }
}
