import { Component, OnInit } from '@angular/core';
import {Recherche} from "../model/recherche";
import {AppConfigService} from "../app-config.service";

@Component({
  selector: 'app-recherche-alternative',
  templateUrl: './recherche-alternative.component.html',
  styleUrls: ['./recherche-alternative.component.scss']
})
export class RechercheAlternativeComponent implements OnInit {
  recherche:Recherche=new Recherche();
  choixMenu:Array<boolean>=new Array<boolean>();
  intermediaire:Array<string>=new Array<string>();
  constructor(private appConfig:AppConfigService) { }
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
    }

  }
  menuNature(res:number)//choix 0
  {
    this.appConfig.findAllNature().subscribe(resp =>{this.intermediaire=resp;});
    switch (res) {
      case 0:this.recherche.nature=this.intermediaire[0];this.menuChoix(1);break;//menuTempsDeVie
      case 1:this.recherche.nature=this.intermediaire[1];this.menuChoix(7);break;//menuUtilite
      case 2:this.recherche.nature=this.intermediaire[2];this.menuChoix(7);break;break;//menuUtilite
      case 3:this.recherche.nature=this.intermediaire[3];this.menuChoix(12);break;break;//menuUtiliteGastronomie
      case 4:this.recherche.nature=this.intermediaire[4];this.menuChoix(13);break;break;//menuUtiliteComposition
    }
  }
  menuTempsDeVie(res:number)//choix 1
  {
    this.appConfig.findAllTempsDeVie().subscribe(resp =>{this.intermediaire=resp;});
    switch (res) {
      case 0:this.recherche.tempsDeVie=this.intermediaire[0];this.rechercheAlternative(this.recherche);break;//Fin
      case 1:this.recherche.tempsDeVie=this.intermediaire[1];this.menuChoix(13);break;//menuUtiliteComposition
    }
  }
  menuPresentationFleur(res:number)//choix 2
  {
    this.appConfig.findAllPresentation().subscribe(resp =>{this.intermediaire=resp;});
    switch (res) {
      case 0:this.recherche.presentation=this.intermediaire[0];this.menuChoix(4);break;//menuSol
      case 1:this.recherche.presentation=this.intermediaire[1];this.menuChoix(5);break;//menuComportement
    }
  }
  menuPresentationExposition(res:number)//choix 3
  {
    this.appConfig.findAllExposition().subscribe(resp =>{this.intermediaire=resp;});
    switch (res) {
      case 0:this.recherche.exposition=this.intermediaire[0];this.menuChoix(6);break;//menuSol
      case 1:this.recherche.exposition=this.intermediaire[1];this.menuChoix(6);break;//menuComportement
      case 2:this.recherche.exposition=this.intermediaire[2];this.menuChoix(6);break;//menuComportement
    }
  }

  rechercheAlternative(recherche:Recherche)
  {

  }
  ngOnInit(): void {

  }

}
function findAllNature() {
    throw new Error('Function not implemented.');
}

