//servizi per chiamate api esterne
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location: any){
    let urlApi = 'http://api.weatherstack.com/current?access_key=7299c3f0be2183818989d385082ec964&query='
    let input = location;
    let urlComplet = urlApi + input
    return this.http.get(
    urlComplet
    );

  }




}
