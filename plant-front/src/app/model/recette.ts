import {RecetteJardin} from "./recetteJardin";


export class  Recette {
  id: number;
  version: number;
  nom : string;
  info : string;
  ingredients : string;
  methode: string;


  constructor(id?: number, version?: number, nom?: string, info?: string, ingredients?: string, methode?: string) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.info = info;
    this.ingredients = ingredients;
    this.methode = methode;
  }
}

