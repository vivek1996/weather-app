import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = 'https://api.openweathermap.org/data/2.5/weather';
  private key = 'appid=38454edd9d0958ac386d653403072f43';
  constructor(private http: HttpClient) {}
  // get weather by coordinates
  getByCoord(position) {
    return this.http.get(
      `${this.url}?${this.key}&lat=${position.coords.latitude}&lon=${
        position.coords.longitude
      }&units=metric`
    );
  }
}
