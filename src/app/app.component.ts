import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  location = 'Yaroslavl';
  temperature = '23°';
  todayWrapperVisible = false;
  dateToday: Date = new Date();
  fullDate = {
    mounth: this.setMounth(),
    day:this.dateToday.getDate(),
    hours: this.dateToday.getHours(),
    minutes: this.dateToday.getMinutes()
  };

  constructor(){
    setInterval(() => {
      this.dateToday = new Date();
      this.fullDate = {
        mounth: this.setMounth(),
        day:this.dateToday.getDate(),
        hours: this.dateToday.getHours(),
        minutes: this.dateToday.getMinutes()
      }
    }, 1000);
  }

  viewPosition() {
    this.todayWrapperVisible = !this.todayWrapperVisible;
  }

  setMounth() : String {
    switch (this.dateToday.getMonth()) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
      default:
        return ''
    }
  }
}
