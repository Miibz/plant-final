import {RecetteJardin} from "./recetteJardin";


export class  Recette {
  id: number;
  version: number;
  nom : string;
  recetteJardin: RecetteJardin;
  methode: string;

  constructor( id?: number, version?: number, nom?: string, recetteJardin?: RecetteJardin, methode?: string) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.recetteJardin= recetteJardin;
    this.methode= methode;

  }
}
