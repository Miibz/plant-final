
import {Meteo} from "./meteo";
import {Facture} from "./facture";

export class  GuideUtilisation {
  id: number;
  version: number;
  formatSauvegarde: string;
  meteo: Meteo;
  facture: Facture;
  nom: string;


  constructor(id: number, version: number, formatSauvegarde: string, meteo: Meteo, facture: Facture, nom: string) {
    this.id = id;
    this.version = version;
    this.formatSauvegarde = formatSauvegarde;
    this.meteo = meteo;
    this.facture = facture;
    this.nom = nom;
  }
}
