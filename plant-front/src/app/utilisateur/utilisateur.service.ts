import { Injectable } from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {Adresse} from "../model/adresse";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

 utilisateurs: Array<Utilisateur> = new Array<Utilisateur>();

  constructor() {
    this.utilisateurs.push(new Utilisateur(1,0,"SULTAN","Eric","s.eric@gmail.com","2342","chibrator12",true,"0723449912",new Adresse(1,0,"rue","la madone","13009","Marseille")));
    this.utilisateurs.push(new Utilisateur(2,0,"BENBELLA","Samir","s.bens@gmail.com","8774","tireur2coupfranc",false,"0620042352",new Adresse(2,0,"boulevard","henri barnier","13015","Marseille")));
    this.utilisateurs.push(new Utilisateur(3,0,"SARKOZY","Nicolas","voleur2dollar@gmail.com","6660","copin2kadafi",true,"0423477953",new Adresse(3,0,"avenue","de la paix","75000","Paris")));

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


