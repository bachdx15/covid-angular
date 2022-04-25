import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Country } from 'src/app/model/country.model';
import { Region } from 'src/app/model/region.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})
export class WeatherAppComponent implements OnInit,OnChanges {
  @Input('country') countryCode = '';
  imgLink=''
  country: any;
  weatherData: any;
  celius: number = 0;
  constructor(
    private http: HttpClient,
    private regioneService: CountryService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.regioneService.getAllRegion().subscribe((data) => {
      this.country = data.find(
        (country: Country) => country.countrycode?.iso2 == this.countryCode
      );

      let lat = this.country.location?.lat;
      let lon = this.country.location?.lng;
      this.http
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=527ced51e433523dee7b74591dc7fd2a`
        )
        .subscribe((weatherData: any) => {
          console.log(weatherData)
          this.celius = Math.round(weatherData?.main.temp - 273.15);
          this.weatherData = weatherData;
         if(this.weatherData?.weather[0].main=='Clouds'){
           this.imgLink='../../../../assets/pink-sky-cover.jpg'

         }
         else if(this.weatherData?.weather[0].main=='Rain'){
          this.imgLink='../../../../assets/9-95111_rain-live-wallpaper-android-apps-on-google-play.jpg'

        }else{
          this.imgLink='../../../../assets/214-2147795_sunny-day.jpg'
        }
        });
    });
  }

  ngOnInit(): void {


  }
}
