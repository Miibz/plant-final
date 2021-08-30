import {Utilisateur} from "./utilisateur";

export class Adresse {
  id: number;
  version: number;
  numero: number;
  rue: string;
  codePostal: string;
  ville: string;
  utilisateur: Utilisateur;


  constructor( id?:number, version?:number, numero?:number, rue?: string, complement?: string, codePostal?: string, ville?: string, utilisateur?:Utilisateur) {
    this.id = id;
    this.version = version;
    this.numero = numero;
    this.rue = rue;
    this.codePostal = codePostal;
    this.ville = ville;
    this.utilisateur = utilisateur;
  }
}
