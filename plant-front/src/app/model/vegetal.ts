
export class Vegetal {
  id:number;
  version:number;
  nom:string;
  nombre:number;
  nombre2:number;
  description:string;
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
  consomationEngrais:number;
  consomationEau:number
  prix:number;
  prixFruit:number;
  affinites:Array<Vegetal>;
  affiche:boolean=false;
  affiche2:boolean=false;


  constructor(id?: number, version?: number,nombre?:number,nombre2?:number,nom?:string,description?:string, nature?: string, tempsDeVie?: string, presentation?: string, exposition?: string, sol?: string, comportement?: string, utilite?: string, typeFeuille?: string, tempsFeuille?: string, utiliteOrnement?: string, utiliteGastronomie?: string, couleur?: string, utiliteComposition?: string, utiliteCimetiere?: string, consomationEngrais?: number, consomationEau?: number, prix?: number, prixFruit?: number, affinites?: Array<Vegetal>,affiche?:boolean,affiche2?:boolean) {
    this.id = id!;
    this.version = version!;
    this.nom = nom!;
    this.nombre = nombre!;
    this.nombre2=nombre2!;
    this.description = description!;
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
    this.consomationEngrais = consomationEngrais!;
    this.consomationEau = consomationEau!;
    this.prix = prix!;
    this.prixFruit = prixFruit!;
    this.affinites = affinites!;
    this.affiche=affiche!;
    this.affiche2=affiche2!;
  }
}
