import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { zoomInDownAnimation } from 'angular-animations';
import { Girone } from '../shared/models/girone';

@Component({
  selector: 'app-crea-gironi',
  templateUrl: './crea-gironi.component.html',
  styleUrls: ['./crea-gironi.component.scss'],
  animations: [
    zoomInDownAnimation()
  ]
})
export class CreaGironiComponent {
  numeroGironi: number = 2;
  elencosquadre:string[] = [];
  gironi: Girone[] = [];
  viewLoader: boolean = false;
  errorMessage: string[] = [];
  elaborazioneInCorso: boolean = false;

  removeSquadra(nomesquadra: string) {
    const index = this.elencosquadre.indexOf(nomesquadra);
    if (index >= 0) {
      this.elencosquadre.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.elencosquadre.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  async creaGironi(): Promise<void>{
    this.elaborazioneInCorso = true;
    this.gironi = [];
    for (let i = 0; i < this.numeroGironi; i++) {
      var g: Girone = {
        nome: 'Girone ' + (i+1),
        elencoSquadre: []
      };
      this.gironi.push(g);
    }

    var temp_s = this.elencosquadre;
    var n_gir = 0;
    while (temp_s.length > 0) {
      this.viewLoader = false;
      var p = this.getRandomInt(this.elencosquadre.length);
      temp_s[p]
      this.gironi[n_gir].elencoSquadre.push(temp_s[p]);
      temp_s.splice(p, 1);

      await this.delay(1000);
      this.viewLoader = true;
      n_gir ++;
      if(n_gir >= this.numeroGironi) n_gir = 0;
      await this.delay(1000);
    }
    this.viewLoader = false;
  }
  getRandomInt(max:number): number {
    return Math.floor(Math.random() * max);
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
