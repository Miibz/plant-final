import {Adresse} from "./adresse";
export class Personne{
  id:number;
  version:number;
  nom:string;
  prenom:string;
  adresseMail:string;
  mdp:string;
  pseudo:string;
  adresse: Adresse;


  constructor(id?: number, version?: number, nom?: string, prenom?: string, adresseMail?: string, mdp?: string, pseudo?: string, adresse?: Adresse) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.prenom = prenom;
    this.adresseMail = adresseMail;
    this.mdp = mdp;
    this.pseudo = pseudo;
    this.adresse = adresse;
  }
}
