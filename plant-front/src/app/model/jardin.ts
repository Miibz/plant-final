import {DejaPlante} from "./dejaPlante";
import {RecetteJardin} from "./recetteJardin";
import {Meteo} from "./meteo";
import {Utilisateur} from "./utilisateur";

export class  Jardin {
  id: number;
  version: number;
  sol : string;
  exposition: string;
  recetteJardin : RecetteJardin;
  superficie : string;
  dejaPlante:Array<DejaPlante>;
  utilisateur : Utilisateur;
  meteo : Meteo;

  constructor( id?: number, version?: number, dejaPlante?: Array<DejaPlante>, sol?: string, exposition?: string, superficie?:string, utilisateur?:Utilisateur, recetteJardin?:RecetteJardin, meteo?:Meteo) {
    this.id = id;
    this.version = version;
    this.dejaPlante = dejaPlante;
    this.sol = sol;
    this.exposition = exposition;
    this.superficie = superficie;
    this.utilisateur = utilisateur;
    this.recetteJardin = recetteJardin;
    this.meteo = meteo;
  }

}
