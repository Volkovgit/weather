import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Weather } from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weather: Weather = {
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [
      {
        id: 0,
        main: 'Snow',
        description: 'light snow',
        icon: '13d',
      },
    ],
    base: 'stations',
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      sea_level: 0,
      grnd_level: 0,
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
    },
    snow: {
      '1h': 0,
    },
    clouds: {
      all: 0,
    },
    dt: 0,
    sys: {
      country: 'RU',
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
  };
  todayWrapperVisible = false;
  dateToday: Date = new Date();
  fullDate = {
    mounth: this.setMounth(),
    day: this.dateToday.getDate(),
    hours: this.dateToday.getHours(),
    minutes: this.dateToday.getMinutes(),
  };

  constructor(private httpClient: AppService) {
    setInterval(() => {
      this.dateToday = new Date();
      this.fullDate = {
        mounth: this.setMounth(),
        day: this.dateToday.getDate(),
        hours: this.dateToday.getHours(),
        minutes: this.dateToday.getMinutes(),
      };
    }, 1000);

    this.httpClient.get('https://ipapi.co/json/').subscribe((ipInfo) => {
      const lat = Math.round(ipInfo.latitude);
      const lon = Math.round(ipInfo.longitude);
      this.httpClient
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b8180dd80bc383683b23aadabe04b513`
        )
        .subscribe((weatherData: Weather) => {
          
          weatherData.main.temp = Math.round(weatherData.main.temp - 273);
          weatherData.sys.sunrise = new Date(weatherData.sys.sunrise).getHours();
          this.weather = weatherData;
          console.log(this.weather);
        });
    });
  }

  viewPosition() {
    this.todayWrapperVisible = !this.todayWrapperVisible;
  }

  setMounth(): String {
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
        return '';
    }
  }
}
