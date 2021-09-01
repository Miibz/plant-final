import {Jardin} from "./jardin";
import {Personne} from "./personne";
import {Recherche} from "./recherche";
import {Adresse} from "./adresse";

export class Utilisateur extends Personne {
  jardin:Array<Jardin>;
  recherche:Array<Recherche>;


  constructor(id?: number, version?: number, nom?: string, prenom?: string, adresseMail?: string, mdp?: string, pseudo?: string, adresse?: Adresse, jardin?: Array<Jardin>, recherche?: Array<Recherche>) {
    super(id, version, nom, prenom, adresseMail, mdp, pseudo, adresse);
    this.jardin = jardin;
    this.recherche = recherche;
  }
}
