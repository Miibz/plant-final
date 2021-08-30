import {Article} from "./article";
import {Commande} from "./commande";
import {Utilisateur} from "./utilisateur";

export class  Devis{
  id: number;
  version: number;
  montant: number;
  article: Article;
  statut: string;
  utilisateur:Utilisateur;
  commande: Commande;

  constructor( id?: number, version?: number, montant?:number, article?: Article, statut?: string, utilisateur?: Utilisateur, commande?:Commande) {
    this.id = id;
    this.version = version;
    this.montant = montant;
    this.article = article;
    this.statut = statut;
    this.utilisateur= utilisateur;
    this.commande  = commande;
  }

}
