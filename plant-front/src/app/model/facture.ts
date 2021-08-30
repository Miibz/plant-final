import {Commande} from "./commande";
import {GuideUtilisation} from "./guideUtilisation";

export class  Facture{
  id: number;
  version: number;
  montant: number;
  commande: Commande;
  guideUtilisation: GuideUtilisation;

  constructor( id?: number, version?: number, montant?:number, commande?: Commande, guideUtilisation?: GuideUtilisation) {
    this.id = id;
    this.version = version;
    this.montant = montant;
    this.commande = commande;
    this.guideUtilisation = guideUtilisation;
  }

}
