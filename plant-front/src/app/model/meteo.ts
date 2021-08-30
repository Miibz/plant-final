import {Jardin} from "./jardin";
import {ConditionMeteo} from "./conditionMeteo";


export class  Meteo {
  id: number;
  version: number;
  dtJour: string;
  temperature : number;
  conditionMeteo: ConditionMeteo;
  forceDuVent : number;
  jardin : Jardin;


  constructor( id?: number, version?: number, dtJour?: string, temperature?: number, conditionMeteo?: ConditionMeteo, forceDuVent?:number, jardin?:Jardin) {
    this.id = id;
    this.version = version;
    this.dtJour = dtJour;
    this.temperature = temperature;
    this.conditionMeteo= conditionMeteo;
    this.forceDuVent = forceDuVent;
    this.jardin = jardin;
  }

}
