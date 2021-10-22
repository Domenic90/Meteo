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
    return this.http.get('http://api.weatherstack.com/current?access_key=1a1bd9accadcf2cf2a033f7515df7f47&query=' +  location);
  }
}
