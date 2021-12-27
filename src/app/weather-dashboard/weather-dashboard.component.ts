import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit {
  CountryList: any;
  CityList: any;
  countryId:any;
  cityId:any;
  WeatherInfo:any=[];

  ChangeCountry(e:any){
    this.countryId=e.target.value;
    this.GetCityData();
  }

  ChangeCity(e:any){
    this.cityId=e.target.value;
    this.GetWeatherInfo();
  }

  constructor(private service:WeatherApiService) { }

  ngOnInit(): void {
    this.service.getCountryList().subscribe((data:any) => {
      this.CountryList=data;
      console.log("isi country list", this.CountryList);
    });    
  }

  GetCityData()
  {
    this.service.getCityList(this.countryId).subscribe((data:any) => {
      this.CityList = data;
      console.log('isi city', data);
    })
  }

  GetWeatherInfo()
  {
    this.service.getWeatherInformation(this.cityId).subscribe((data:any) => {
      this.WeatherInfo.push(data);
      console.log('isi weather', data);
    })
  }
}
