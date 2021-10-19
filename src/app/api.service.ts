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
    let urlApi =
      'http://api.weatherstack.com/current?access_key=39c0abeee48668d4d7a48dd86d0235a6&query=';
    let input = location;
    let urlComplet = urlApi + input;
    return this.http.get(urlComplet);
  }
}
