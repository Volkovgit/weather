import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  location = 'Yaroslavl';
  today = 'Today, October 15 5:45'
  temperature='23°'
}
