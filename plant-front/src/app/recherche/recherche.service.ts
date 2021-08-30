import { Injectable } from '@angular/core';
import {Personne} from "../model/personne";
import {Recherche} from "../model/recherche";

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  recherches: Array<Recherche> = new Array<Recherche>();

  constructor() {
    this.recherches.push(new Recherche (1,0,"10-01-2020","fleur","vivance","Massif","sableux","droite","décoratif","feuillu","persistant","fleur","fleur","jaune","exterieur","coupe"));

  }
  findAll(): Array<Recherche> {
    return this.recherches;
  }

  findById(id: number): Recherche {
    return this.recherches.find(recherche => recherches.id == id);

  }

  create(recherche: Recherche) {
    let max = 0;
    for (let current of this.recherches) {
      if (max < current.id) {
        max = current.id;
      }
    }
    recherche.id = ++max;
    recherche.version = 0;

    this.recherches.push(recherche);
  }

  modify(recherche: Recherche) {
    let find: boolean = false;
    for (var indice = 0; indice < this.recherches.length; indice++) {
      if (this.recherches[indice].id == recherche.id) {
        find = true;
        break;
      }
    }
    if (find) {
      recherche.version++;
      this.recherches[indice] = recherche;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.recherches.length; indice++) {
      if (this.recherches[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.recherches.splice(indice, 1);
    }
  }
}



