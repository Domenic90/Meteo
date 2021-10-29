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
    return this.http.get('http://api.weatherstack.com/current?access_key=022e6a2770df8cab836d531e2bb30028&query=' +  location);
  }
}


/* Chiavi Api di riserva
5bcaf638554927c750263460034bfe42
bd9f57d7283a2dc4578b857b1f55b854
98082d4ce2b96a002d8c607c986354ef */

