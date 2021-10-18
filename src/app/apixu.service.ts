//servizi per chiamate api esterne
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location: any){
    let urlApi = 'http://api.weatherstack.com/current?access_key=4f9d2fe9a9e06b6b54ab75936a9c69f4&query='
    let input = location;
    let urlComplet = urlApi + input
    return this.http.get(
    urlComplet
    );

  }




}
