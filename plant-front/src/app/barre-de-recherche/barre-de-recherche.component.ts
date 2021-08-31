import { Component, OnInit } from '@angular/core';
import { Vegetal } from '../model/vegetal';
import {BarreDeRechercheService} from "./barre-de-recherche.service";
import {GuideUtilisation} from "../model/guideUtilisation";
import {Recette} from "../model/recette";
import {Observable} from "rxjs";
import {VegetalHttpService} from "../vegetal/vegetal-http.service";
import {AppConfigService} from "../app-config.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.scss']
})
export class BarreDeRechercheComponent implements OnInit {

  barreDeRechercheForm: BarreDeRechercheService = null;
  vegetaux: Array<Vegetal>;
  recettes: Array<Recette>;
  guides: Array<GuideUtilisation>;

  recherche: string;


  constructor(private barreDeRechercheService: BarreDeRechercheService, private vegetalHttpService: VegetalHttpService,private appConfigService: AppConfigService) { }

  ngOnInit(): void {
  }

listVegetaux() {
    this.barreDeRechercheService.findVegetauxWithNom(this.recherche).subscribe(resp => {
      this.vegetaux = resp;
    }, error => console.log(error));
}

  listRecettes(){
    this.barreDeRechercheService.findRecettesWithNom(this.recherche).subscribe(resp => {
      this.recettes = resp;
    }, error => console.log(error));
  }

  listGuides() {
    this.barreDeRechercheService.findGuidesWithNom(this.recherche).subscribe(resp => {
      this.guides = resp;
    }, error => console.log(error));
  }

  affichage(){
      this.listVegetaux();
    this.listRecettes();
    this.listGuides();
  }
}
