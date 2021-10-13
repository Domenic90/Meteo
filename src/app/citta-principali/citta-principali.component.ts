import { Component, OnInit } from '@angular/core';
import { ApixuService } from '../apixu.service';


@Component({
  selector: 'app-citta-principali',
  templateUrl: './citta-principali.component.html',
  styleUrls: ['./citta-principali.component.css']
})
export class CittaPrincipaliComponent implements OnInit {
  public weatherData: any;


  constructor(
    private apixuService: ApixuService
  ) {}

  ngOnInit(): void {

  }


}


