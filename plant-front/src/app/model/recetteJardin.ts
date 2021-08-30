import {Recette} from "./recette";
import {Jardin} from "./jardin";

export class  RecetteJardin {
  id: number;
  version: number;
  recette:Recette;
  jardin: Jardin;

  constructor( id?: number, version?: number, recette?: Recette, jardin?: Jardin) {
    this.id = id;
    this.version = version;
    this.recette = recette;
    this.jardin = jardin;

  }
}
