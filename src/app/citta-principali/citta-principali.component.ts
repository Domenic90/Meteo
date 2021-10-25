import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-citta-principali',
  templateUrl: './citta-principali.component.html',
  styleUrls: ['./citta-principali.component.css'],
})
export class CittaPrincipaliComponent implements OnInit {
  //dichiaro ed inizializzo un array delle città statiche in pagina
   City: any[] = ['Milan', 'Rome', 'Naples', 'Turin', 'Florence', 'Palermo'];

  constructor(private apiService: ApiService) {}

  /* tramite ciclo for faccio un ciclo del array City per leggerne i valori e tramite i metodi
  faccio richiesta api per poi leggerne i dati. Effettuo questa operazione nel metodo ngOnInit
  in modo che la visualizzazione dei dati avvenga subito all'atterraggio in pagina */
  ngOnInit(): void {
    for (let i = 0; i < this.City.length; i++) {
      this.apiService.getWeather(this.City[i]).subscribe((data) => {
        this.City[i] = data;
        console.log(this.City[i]);
      });
    }
  }
}
