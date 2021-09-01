import {Commande} from "./commande";
import {Guide} from "./guide";

export class  Facture{
  id: number;
  version: number;
  montant: number;
  commande: Commande;
  guideUtilisation: Guide;

  constructor( id?: number, version?: number, montant?:number, commande?: Commande, guideUtilisation?: Guide) {
    this.id = id;
    this.version = version;
    this.montant = montant;
    this.commande = commande;
    this.guideUtilisation = guideUtilisation;
  }

}
