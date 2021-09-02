import {RecetteJardin} from "./recetteJardin";


export class  Recette {
  id: number;
  version: number;
  nom : string;
  nbPersonne : string;
  temps : string;
  ingredients : string;
  methode: string;
  descriptif: string;


  constructor(id?: number, version?: number, nom?: string, nbPersonne?: string, temps?: string, ingredients?: string, methode?: string, descriptif?: string) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.nbPersonne = nbPersonne;
    this.temps = temps;
    this.ingredients = ingredients;
    this.methode = methode;
    this.descriptif = descriptif;

  }
}

