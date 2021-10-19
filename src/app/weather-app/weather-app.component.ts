import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})

export class WeatherComponent implements OnInit {
  //inserisco decorator input vicino alla variabile per far si che legga i dati in ingresso da componente NavBar
  @Input() public weatherData: any;


  constructor() {}


  ngOnInit(): void {}

  //metodo per comunicare con il componente NavBar e restiturie i dati meteo per la città scelta
  getCitta() {
    this.weatherData;
  }

}
