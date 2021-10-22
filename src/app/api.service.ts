//servizi per chiamate api esterne
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //metodo per lettura e chiamata api in formato Json da weatherstack.com
  getWeather(location: any) {
    return this.http.get('http://api.weatherstack.com/current?access_key=cc523acd0682b2292eb87e62de617cd2&query=' +  location);
  }
}
