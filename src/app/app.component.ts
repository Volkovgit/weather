import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weather = {
    location : '',
    temperature : 0,
    weatherType : ""
  }
  todayWrapperVisible = false;
  dateToday: Date = new Date();
  fullDate = {
    mounth: this.setMounth(),
    day:this.dateToday.getDate(),
    hours: this.dateToday.getHours(),
    minutes: this.dateToday.getMinutes()
  };

  constructor(private httpClient: AppService){
    setInterval(() => {
      this.dateToday = new Date();
      this.fullDate = {
        mounth: this.setMounth(),
        day:this.dateToday.getDate(),
        hours: this.dateToday.getHours(),
        minutes: this.dateToday.getMinutes()
      }
    }, 1000);

    this.httpClient.get('https://ipapi.co/json/').subscribe((ipInfo) => {
      const lat = Math.round(ipInfo.latitude)
      const lon = Math.round(ipInfo.longitude)
      this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b8180dd80bc383683b23aadabe04b513`).subscribe((weatherData) => {
        console.log(weatherData);
        this.weather.location = weatherData.name
        this.weather.temperature = Math.round(weatherData.main.temp - 273)
        this.weather.weatherType = weatherData.weather[0].main
      })
    })
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
