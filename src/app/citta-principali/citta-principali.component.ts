import { Component, OnInit } from '@angular/core';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-citta-principali',
  templateUrl: './citta-principali.component.html',
  styleUrls: ['./citta-principali.component.css'],
})
export class CittaPrincipaliComponent implements OnInit {
  weatherData: any;
  City: any[] = ['Milan', 'Rome', 'Naples', 'Turin', 'Florence', 'Palermo'];

  constructor(private apixuService: ApixuService) {}

  ngOnInit(): void {
    for (let i = 0; i < this.City.length; i++) {
      this.apixuService.getWeather(this.City[i]).subscribe(data => {
        this.weatherData = data;
        document.getElementById(this.City[i]);
        console.log(this.weatherData);
      });

      /*
    this.City[1]= this.apixuService.getWeather('Rome').subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });



    this.City[2]= this.apixuService.getWeather('Naples').subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });



    this.City[3]= this.apixuService.getWeather('Turin').subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });



    this.City[4]= this.apixuService.getWeather('Florence').subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });



    this.City[5]= this.apixuService.getWeather('Palermo').subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    }); */
    }
  }
}
