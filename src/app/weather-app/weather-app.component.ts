import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,} from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})
export class WeatherComponent implements OnInit {
 public weatherSearchForm: any;
 @Input()  public weatherData: any;


  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
    ) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: [''],
    });
  }

  sendToAPIXU(formValues: any) {
    this.apixuService
    .getWeather(formValues.location)
    .subscribe(data => { this.weatherData = data;
     console.log(this.weatherData)
    });
  }
}
