import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  readonly weatherAPIUrl = "https://localhost:44398/api";

  constructor(private http:HttpClient) { }

  getCountryList():Observable<any[]> {
    return this.http.get<any>(this.weatherAPIUrl + '/country/GetAllCountries');
  }

  getCityList(countryId:number):Observable<any[]> {
    return this.http.get<any>(this.weatherAPIUrl + `/city/GetCityBasedCountry/${countryId}`)
  }

  getWeatherInformation(cityId:number):Observable<any[]> {
    return this.http.get<any>(this.weatherAPIUrl + `/WeatherInfo/GetWeatherByCity/${cityId}`)
  }
}
