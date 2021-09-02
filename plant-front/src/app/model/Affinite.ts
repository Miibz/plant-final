import {Vegetal} from "./vegetal";

export class Affinite {
  id:number;
  version:number;
  vegetal1:Vegetal;
  vegetal2:Vegetal;

  constructor(id?: number, version?: number, vegetal1?: Vegetal, vegetal2?: Vegetal) {
    this.id = id;
    this.version = version;
    this.vegetal1 = vegetal1;
    this.vegetal2 = vegetal2;
  }
}
