
export class Recherche {
  id:number;
  version:number;
  nature:string;
  tempsDeVie:string;
  presentation:string;
  exposition:string;
  sol:string;
  comportement:string;
  utilite:string;
  typeFeuille:string;
  tempsFeuille:string;
  utiliteOrnement:string;
  utiliteGastronomie:string;
  couleur:string;
  utiliteComposition:string;
  utiliteCimetiere:string;


  constructor(id?: number, version?: number,nombre?:number,nombre2?:number,nom?:string,description?:string, nature?: string, tempsDeVie?: string, presentation?: string, exposition?: string, sol?: string, comportement?: string, utilite?: string, typeFeuille?: string, tempsFeuille?: string, utiliteOrnement?: string, utiliteGastronomie?: string, couleur?: string, utiliteComposition?: string, utiliteCimetiere?: string) {
    this.id = id!;
    this.version = version!;
    this.nature = nature!;
    this.tempsDeVie = tempsDeVie!;
    this.presentation = presentation!;
    this.exposition = exposition!;
    this.sol = sol!;
    this.comportement = comportement!;
    this.utilite = utilite!;
    this.typeFeuille = typeFeuille!;
    this.tempsFeuille = tempsFeuille!;
    this.utiliteOrnement = utiliteOrnement!;
    this.utiliteGastronomie = utiliteGastronomie!;
    this.couleur = couleur!;
    this.utiliteComposition = utiliteComposition!;
    this.utiliteCimetiere = utiliteCimetiere!;
  }
}
