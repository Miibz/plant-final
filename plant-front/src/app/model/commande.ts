import {Devis} from "./devis";
import {Facture} from "./facture";

export class  Commande{
  id: number;
  version: number;
  statut: string;
  devis: Devis;
  facture: Facture;

  constructor( id?: number, version?: number, statut?: string, devis?: Devis, facture?: Facture) {
    this.id = id;
    this.version = version;
    this.statut = statut;
    this.devis = devis;
    this.facture = facture;
  }

}
