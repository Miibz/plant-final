import {Vegetal} from "./vegetal";

export class  Article{
  id: number;
  version: number;
  devis: number;
  vegetal: Vegetal;

  constructor( id?: number, version?: number, devis?: number, vegetal?: Vegetal) {
    this.id = id;
    this.version = version;
    this.devis = devis;
    this.vegetal = vegetal;
  }

}
