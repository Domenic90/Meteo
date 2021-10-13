import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public weatherData: any;


  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
    ) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
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
