import { Injectable } from '@angular/core';

import {Personne} from "../model/personne";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  personnes: Array<Personne> = new Array<Personne>();

  constructor() {
    this.personnes.push(new Personne (1,0,"SULTAN","Eric","s.eric@gmail.com","2342","chibrator12"));
    this.personnes.push(new Personne (2,0,"BENBELLA","Samir","s.bens@gmail.com","8774","tireur2coupfranc"));
    this.personnes.push(new Personne (3,0,"SARKOZY","Nicolas","voleur2dollar@gmail.com","6660","copin2kadafi"));
  }
  findAll(): Array<Personne> {
    return this.personnes;
  }

  findById(id: number): Personne {
    return this.personnes.find(personne => personne.id == id);

  }

  create(personne: Personne) {
    let max = 0;
    for (let current of this.personnes) {
      if (max < current.id) {
        max = current.id;
      }
    }
    personne.id = ++max;
    personne.version = 0;

    this.personnes.push(personne);
  }

  modify(personne: Personne) {
    let find: boolean = false;
    for (var indice = 0; indice < this.personnes.length; indice++) {
      if (this.personnes[indice].id == personne.id) {
        find = true;
        break;
      }
    }
    if (find) {
      personne.version++;
      this.personnes[indice] = personne;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.personnes.length; indice++) {
      if (this.personnes[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.personnes.splice(indice, 1);
    }
  }
}



