import {Component, HostListener, OnInit} from '@angular/core';
import {Recherche} from "../model/recherche";
import {AppConfigService} from "../app-config.service";
import {RechercheService} from "../recherche/recherche-Http.service";
import {VegetalHttpService} from "../vegetal/vegetal-http.service";
import {Vegetal} from "../model/vegetal";

@Component({
  selector: 'app-recherche-alternative',
  templateUrl: './recherche-alternative.component.html',
  styleUrls: ['./recherche-alternative.component.scss']
})
export class RechercheAlternativeComponent implements OnInit {
  recherche:Recherche=new Recherche();
  opaciteNature=[0.5];
  indice=0;
  adresse:string="../../assets/img/Fleur.jpg";
  choixMenu:Array<boolean>=new Array<boolean>();
  intermediaire:Array<string>=new Array<string>();
  natures:Array<string>;
  tempsDeVie:Array<string>;
  expositions:Array<string>;
  sols:Array<string>;
  comportement:Array<string>;
  couleur:Array<string>;
  utilite:Array<string>;
  typeDeFeuille:Array<string>;
  tempsDeFeuille:Array<string>;
  presentation:Array<string>;
  utiliteOrnement:Array<string>;
  utiliteGastronomie:Array<string>;
  utiliteComposition:Array<string>;
  utiliteCimetiere:Array<string>;
  utilitePresentation:Array<string>;
  resultats:Array<Vegetal>=new Array<Vegetal>();
  opaciteTempsDeVie=[0.5];
  opacitePresentationFleur=[0.5];
  opaciteExposition=[0.5];
  opaciteSol=[0.5];
  opaciteComportement=[0.5];
  opaciteCouleur=[0.5];
  opaciteUtilite=[0.5];
  opaciteTypeDeFeuille=[0.5];
  opaciteTempsDeFeuille=[0.5];
  opacitePresentationArbuste=[0.5];
  opaciteUtiliteOrnement=[0.5];
  opaciteUtiliteGastronomie=[0.5];
  opaciteUtiliteComposition=[0.5];
  opaciteCimetiere=[0.5];
  opaciteUtilitePresentation=[0.5];

  constructor(private appConfig:AppConfigService,private rechercheService:RechercheService,private vegetalService:VegetalHttpService) {
    this.choixMenu[0]=true;
    this.appConfig.findAllNature().subscribe(resp =>{this.natures=resp;});
    this.appConfig.findAllTempsDeVie().subscribe(resp =>{ this.tempsDeVie=resp;});
    this.appConfig.findAllPresentation().subscribe(resp =>{ this.presentation=resp;});
    this.appConfig.findAllExposition().subscribe(resp =>{ this.expositions=resp;});
    this.appConfig.findAllSol().subscribe(resp =>{ this.sols=resp;});
    this.appConfig.findAllTypeDeFeuille().subscribe(resp =>{ this.typeDeFeuille=resp;});
    this.appConfig.findAllComportement().subscribe(resp =>{ this.comportement=resp;});
    this.appConfig.findAllCouleur().subscribe(resp =>{ this.couleur=resp;});
    this.appConfig.findAllUtilite().subscribe(resp =>{ this.utilite=resp;});
    this.appConfig.findAllUtiliteOrnement().subscribe(resp =>{ this.utiliteOrnement=resp;});
    this.appConfig.findAllUtiliteGastronomie().subscribe(resp =>{ this.utiliteGastronomie=resp;});
    this.appConfig.findAllNUtiliteComposition().subscribe(resp =>{ this.utiliteComposition=resp;});
    this.appConfig.findAllCimetiere().subscribe(resp =>{ this.utiliteCimetiere=resp;});
    this.appConfig.findAllPresentation().subscribe(resp =>{ this.utilitePresentation=resp;});
  }

  menuChoixAvant(lesChoix:Array<string>,unChoix:string,i:number,descision:string):number
  {
    let choix=lesChoix.indexOf(unChoix);
    switch (descision) {
      case "Nature": this.opaciteNature[choix]=1;break;//menuNature
      case "TempsDeVie":this.opaciteTempsDeVie[choix]=1;break;//menuTempsDeVie
      case "menuPresentationFleur":this.opacitePresentationFleur[choix]=1;break;//menuPresentationFleur
      case "Exposition":this.opaciteExposition[choix]=1;break;//menuExposition()
      case "Sol":this.opaciteSol[choix]=1;break;//menuSol()
      case "Comportement":this.opaciteComportement[choix]=1;break;//menuComportement()
      case "Couleur":this.opaciteCouleur[choix]=1;break;//menuCouleur()
      case "Utilite":this.opaciteUtilite[choix]=1;break;//menuUtilite
      case "TypeDeFeuille":this.opaciteTypeDeFeuille[choix]=1;break;//menuTypeDeFeuille
      case "TempsDeFeuille":this.opaciteTempsDeFeuille[choix]=1;break;//menuTempsDeFeuille()
      case "PresentationArbuste":this.opacitePresentationArbuste[choix]=1;break;//menuPresentationArbuste();
      case "UtiliteOrnement":this.opaciteUtiliteOrnement[choix]=1;break;//menuUtiliteOrnement();
      case "UtiliteGastronomie":this.opaciteUtiliteGastronomie[choix]=1;break;//menuUtiliteGastronomie();
      case "UtiliteComposition" :this.opaciteUtiliteComposition[choix]=1;break;//menuUtiliteComposition();
      case "UtiliteCimetiere" :this.opaciteCimetiere[choix]=1;break;//menuUtiliteCimetiere();
      case "UtilitePresentation" :this.opaciteUtilitePresentation[choix]=1;break;//menuUtilitePresentation();

    }
    return choix;
  }

  menuChoix(choix:number)
  {
    switch (choix)
    {
      case 0: this.choixMenu[choix]=true;break;//menuNature
      case 1:this.choixMenu[choix]=true;break;//menuTempsDeVie
      case 2:this.choixMenu[choix]=true;break;//menuPresentationFleur
      case 3:this.choixMenu[choix]=true;break;//menuExposition()
      case 4:this.choixMenu[choix]=true;break;//menuSol()
      case 5:this.choixMenu[choix]=true;break;//menuComportement()
      case 6:this.choixMenu[choix]=true;break;//menuCouleur()
      case 7:this.choixMenu[choix]=true;break;//menuUtilite
      case 8:this.choixMenu[choix]=true;break;//menuTypeDeFeuille
      case 9:this.choixMenu[choix]=true;break;//menuTempsDeFeuille()
      case 10:this.choixMenu[choix]=true;break;//menuPresentationArbuste();
      case 11:this.choixMenu[choix]=true;break;//menuUtiliteOrnement();
      case 12:this.choixMenu[choix]=true;break;//menuUtiliteGastronomie();
      case 13 :this.choixMenu[choix]=true;break;//menuUtiliteComposition();
      case 14 :this.choixMenu[choix]=true;break;//menuUtiliteCimetiere();
      case 15 :this.choixMenu[choix]=true;break;//menuUtilitePresentation();
    }

  }
  menuNature(res:number)//choix 0
  {
      switch (res) {
        case 0:this.recherche.nature=this.natures[0];this.menuChoix(1);break;//menuTempsDeVie
        case 1:this.recherche.nature=this.natures[1];this.menuChoix(7);break;//menuUtilite
        case 2:this.recherche.nature=this.natures[2];this.menuChoix(7);break;break;//menuUtilite
        case 3:this.recherche.nature=this.natures[3];this.menuChoix(12);break;break;//menuUtiliteGastronomie
        case 4:this.recherche.nature=this.natures[4];this.menuChoix(13);break;break;//menuUtiliteComposition
      }

  }
  menuTempsDeVie(res:number)//choix 1
  {
    switch (res) {
      case 0:this.recherche.tempsDeVie=this.tempsDeVie[0];this.rechercheAlternative(this.recherche);break;//Fin
      case 1:this.recherche.tempsDeVie=this.tempsDeVie[1];this.menuChoix(2);break;//menuUtiliteComposition
    }
  }
  menuPresentationFleur(res:number)//choix 2
  {
    switch (res) {
      case 0:this.recherche.presentation=this.presentation[0];this.menuChoix(4);break;//menuSol
      case 1:this.recherche.presentation=this.presentation[1];this.menuChoix(5);break;//menuComportement
    }
  }
  menuExposition(res:number)//choix 3
  {
    switch (res) {
      case 0:this.recherche.exposition=this.expositions[0];this.menuChoix(6);break;//menuSol
      case 1:this.recherche.exposition=this.expositions[1];this.menuChoix(6);break;//menuComportement
      case 2:this.recherche.exposition=this.expositions[2];this.menuChoix(6);break;//menuComportement
    }
  }

  menuSol(res:number)//choix 4
  {
    switch (res)
    {
      case 0:this.recherche.sol=this.sols[0];this.rechercheAlternative(this.recherche);break;//Fin
      case 1:this.recherche.sol=this.sols[1];this.rechercheAlternative(this.recherche);break;//Fin
      case 2:this.recherche.sol=this.sols[2];this.rechercheAlternative(this.recherche);break;//Fin
      case 3:this.recherche.sol=this.sols[3];this.rechercheAlternative(this.recherche);break;//Fin
      case 4:this.recherche.sol=this.sols[4];this.rechercheAlternative(this.recherche);break;//Fin
    }
  }
  menuComportement(res:number)//choix 5
  {
    switch (res)
    {
      case 0:this.recherche.comportement=this.comportement[0];this.menuChoix(3);break;//menuSol
      case 1:this.recherche.comportement=this.comportement[1];this.menuChoix(3);break;//menuComportement
    }
  }
  menuCouleur(res:number)//choix 6
  {
    switch (res)
    {
      case 0:this.recherche.comportement=this.couleur[0];this.menuChoix(3);break;//menuSol
      case 1:this.recherche.comportement=this.couleur[1];this.menuChoix(3);break;//menuComportement
      case 2:this.recherche.comportement=this.couleur[0];this.menuChoix(3);break;//menuSol
      case 3:this.recherche.comportement=this.couleur[1];this.menuChoix(3);break;//menuComportement
      case 4:this.recherche.comportement=this.couleur[0];this.menuChoix(3);break;//menuSol
    }
  }
  menuUtilite(res:number)//choix 7
  {
    console.log("menuUtilite");
    switch (res)
    {
      case 0:this.recherche.utilite=this.utilite[0];this.menuChoix(4);break;//menuSol
      case 1:this.recherche.utilite=this.utilite[1];console.log("d??coratif");this.menuChoix(8);break;//menuTypeFeuille
    }
  }

  menuTypeDeFeuille(res:number)//choix 8
  {
    console.log(this.recherche)
    if(this.recherche.nature=="Arbre")
    {
      console.log("arbre");
      switch (res)
      {
        case 0:this.recherche.typeFeuille=this.typeDeFeuille[0];this.menuChoix(4);break;//menuSol
        case 1:this.recherche.typeFeuille=this.typeDeFeuille[1];this.menuChoix(4);break;//menuSol
      }
    }
    else if(this.recherche.nature=="Arbuste")
    {
      console.log("arbuste");
      switch (res)
      {
        case 0:this.recherche.typeFeuille=this.typeDeFeuille[0];this.menuChoix(10);break;//menuPresentationArbuste
        case 1:this.recherche.typeFeuille=this.typeDeFeuille[1];this.menuChoix(10);break;//menuPresentationArbuste
      }
    }
  }

  menuTempsDeFeuille(res:number)//choix 9
  {
    switch (res)
    {
      case 0:this.recherche.tempsFeuille=this.tempsDeFeuille[0];this.rechercheAlternative(this.recherche);break;//Fin
      case 1:this.recherche.tempsFeuille=this.tempsDeFeuille[1];this.rechercheAlternative(this.recherche);break;//Fin
    }
  }

  menuPresentationArbuste(res:number)//choix 10
  {
    switch (res)
    {
      case 0:this.recherche.presentation=this.presentation[2];this.menuChoix(4);break;//menuSol
      case 1:this.recherche.presentation=this.presentation[3];this.menuChoix(8);break;//menuTypeFeuille
      case 2:this.recherche.presentation=this.presentation[4];this.menuChoix(8);break;//menuTypeFeuille
    }
  }

  menuUtiliteOrnement(res:number)//choix 11
  {
    switch (res)
    {
      case 0:this.recherche.utiliteOrnement=this.utiliteOrnement[0];this.rechercheAlternative(this.recherche);break;//Fin
      case 1:this.recherche.utiliteOrnement=this.utiliteOrnement[1];this.rechercheAlternative(this.recherche);break;//Fin
    }
  }

  menuUtiliteGastronomie(res:number)//choix 12
  {
    switch (res)
    {
      case 0:this.recherche.utiliteGastronomie=this.utiliteGastronomie[0];this.rechercheAlternative(this.recherche);break;//Fin
      case 1:this.recherche.utiliteGastronomie=this.utiliteGastronomie[1];this.rechercheAlternative(this.recherche);break;//Fin
      case 2:this.recherche.utiliteGastronomie=this.utiliteGastronomie[2];this.rechercheAlternative(this.recherche);break;//Fin
      case 3:this.recherche.utiliteGastronomie=this.utiliteGastronomie[3];this.rechercheAlternative(this.recherche);break;//Fin
    }
  }

  menutiliteComposition(res:number)//choix 13
  {
    switch (res)
    {
      case 0:this.recherche.utiliteComposition=this.utiliteComposition[0];this.menuChoix(14);break;//Fin
      case 1:this.recherche.utiliteComposition=this.utiliteComposition[1];this.rechercheAlternative(this.recherche);break;//Fin
      case 2:this.recherche.utiliteComposition=this.utiliteComposition[2];this.rechercheAlternative(this.recherche);break;//Fin
    }
  }

  menutiliteCimetiere(res:number)//choix 13
  {
    switch (res)
    {
      case 0:this.recherche.utiliteComposition=this.utiliteCimetiere[0];this.menuChoix(14);break;//Fin
      case 1:this.recherche.utiliteComposition=this.utiliteCimetiere[1];this.rechercheAlternative(this.recherche);break;//Fin
      case 2:this.recherche.utiliteComposition=this.utiliteCimetiere[2];this.rechercheAlternative(this.recherche);break;//Fin
    }
  }
  menutilitePresentation(res:number)//choix 14
  {
    switch (res)
    {
      case 0:this.recherche.utilitePresentation=this.utiliteCimetiere[0];this.rechercheAlternative(this.recherche);break;//Fin
      case 1:this.recherche.utilitePresentation=this.utiliteCimetiere[1];this.rechercheAlternative(this.recherche);break;//Fin
    }
  }
  rechercheAlternative(recherche:Recherche)
  {
    this.rechercheService.create2(this.recherche).subscribe(response => {
      let recherche=response;
      console.log(recherche);
      this.vegetalService.findAllBySearch((recherche.id)).subscribe(reponse => {
        this.resultats = reponse;
        console.log(this.resultats);
      }, error => console.log(error));;
    }, error => console.log(error));;
  }

reponseOpacite(e:string,listes:Array<string>,i:number)
{
 // return {'opacity':+1+';'};
  return {'background-color':'blue'+';'};
}

  test()
  {
    // return {'opacity':+1+';'};
    return {'background-color':'red'+';'};
  }
  ngOnInit(): void {

  }

}
function findAllNature() {
    throw new Error('Function not implemented.');
}

