import {Vegetal} from "./vegetal";
import {Jardin} from "./jardin";

export class  DejaPlante{
  id: number;
  version: number;
  age: number;
  jardin: Jardin;
  vegetal: Vegetal;

  constructor( id?: number, version?: number, age?: number, jardin?: Jardin, vegetal?: Vegetal) {
    this.id = id;
    this.version = version;
    this.age = age;
    this.jardin= jardin;
    this.vegetal = vegetal;
  }

}
