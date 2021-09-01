
export class  Guide {
  id: number;
  version: number;
  nom: string;
  contenu: string;


  constructor(id?: number, version?: number, nom?: string, contenu?: string) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.contenu = contenu;
  }
}
