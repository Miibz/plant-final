
export class Recherche {
  id:number;
  version:number;
  nature:string=null;
  tempsDeVie:string=null;
  presentation:string=null;
  exposition:string=null;
  sol:string=null;
  comportement:string=null;
  utilite:string=null;
  typeFeuille:string=null;
  tempsFeuille:string=null;
  utiliteOrnement:string=null;
  utiliteGastronomie:string=null;
  couleur:string=null;
  utiliteComposition:string=null;
  utiliteCimetiere:string=null;
  utilitePresentation:string=null;


  constructor(id?: number, version?: number,nombre?:number,nombre2?:number,nom?:string,description?:string, nature?: string, tempsDeVie?: string, presentation?: string, exposition?: string, sol?: string, comportement?: string, utilite?: string, typeFeuille?: string, tempsFeuille?: string, utiliteOrnement?: string, utiliteGastronomie?: string, couleur?: string, utiliteComposition?: string, utiliteCimetiere?: string,utilitePresentation?:string) {
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
    this.utilitePresentation=utilitePresentation;
  }
}
