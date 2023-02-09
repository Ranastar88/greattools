import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-crea-gironi',
  templateUrl: './crea-gironi.component.html',
  styleUrls: ['./crea-gironi.component.scss']
})
export class CreaGironiComponent {

  elencosquadre:string[] = [];

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
}
