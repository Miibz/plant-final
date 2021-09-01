import { Injectable } from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {Adresse} from "../model/adresse";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

 utilisateurs: Array<Utilisateur> = new Array<Utilisateur>();

  constructor() {

  }
  findAll(): Array<Utilisateur> {
    return this.utilisateurs;
  }

  findById(id: number): Utilisateur {
    return this.utilisateurs.find(utilisateur => utilisateur.id == id);

  }

  create(utilisateur: Utilisateur) {
    let max = 0;
    for (let current of this.utilisateurs) {
      if (max < current.id) {
        max = current.id;
      }
    }
    utilisateur.id = ++max;
    utilisateur.version = 0;

    this.utilisateurs.push(utilisateur);
  }

  modify(utilisateur: Utilisateur) {
    let find: boolean = false;
    for (var indice = 0; indice < this.utilisateurs.length; indice++) {
      if (this.utilisateurs[indice].id == utilisateur.id) {
        find = true;
        break;
      }
    }
    if (find) {
      utilisateur.version++;
      this.utilisateurs[indice] = utilisateur;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.utilisateurs.length; indice++) {
      if (this.utilisateurs[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.utilisateurs.splice(indice, 1);
    }
  }
}


