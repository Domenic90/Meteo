//servizi per chiamate api esterne
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location: any){
    let urlApi = 'http://api.weatherstack.com/current?access_key=0840ca52f9ffee64601f46ea7fbf224d&query='
    let input = location;
    let urlComplet = urlApi + input
    return this.http.get(
    urlComplet
    );

  }




}
