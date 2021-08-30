
export class Personne{
  id:number;
  version:number;
  nom:string;
  prenom:string;
  adresseMail:string;
  mdp:string;
  pseudo:string;


  constructor(id: number, version: number, nom: string, prenom: string, adresseMail: string, mdp: string, pseudo: string) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.prenom = prenom;
    this.adresseMail = adresseMail;
    this.mdp = mdp;
    this.pseudo = pseudo;
  }
}
