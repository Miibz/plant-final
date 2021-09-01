import { Injectable } from '@angular/core';
import {Vegetal} from "../model/vegetal";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {GuideUtilisation} from "../model/guideUtilisation";
import {Recette} from "../model/recette";

@Injectable({
  providedIn: 'root'
})
export class BarreDeRechercheService {

  vegetaux: Array<Vegetal> = new Array<Vegetal>();
  recette: Array<Recette> = new Array<Recette>();
  guide: Array<GuideUtilisation> = new Array<GuideUtilisation>();


  constructor(private http : HttpClient,private appConfigService:AppConfigService) {
    this.loadVegetal();
    this.loadGuide();
    this.loadRecette()
  }

  findVegetauxWithNom(nom: string): Observable<Array<Vegetal>> {
    return this.http.get<Array<Vegetal>>(this.appConfigService.backEndUrl+"vegetal/recherche/"+ nom);
  }

  findGuidesWithNom(nom: string): Observable<Array<GuideUtilisation>> {
    return this.http.get<Array<GuideUtilisation>>(this.appConfigService.backEndUrl+"guideUtilisation/recherche/"+ nom);
  }

  findRecettesWithNom(nom: string): Observable<Array<Recette>> {
    return this.http.get<Array<Recette>>(this.appConfigService.backEndUrl+"recette/recherche/"+ nom);
  }

  loadVegetal() {
    this.http.get<Array<Vegetal>>(this.appConfigService.backEndUrl + "barre-de-recherche/").subscribe(response => {
      this.vegetaux = response;
    }, error => console.log(error));
  }

  loadRecette() {
    this.http.get<Array<Recette>>(this.appConfigService.backEndUrl + "barre-de-recherche/").subscribe(response => {
      this.recette = response;
    }, error => console.log(error));
  }

  loadGuide() {
    this.http.get<Array<GuideUtilisation>>(this.appConfigService.backEndUrl + "barre-de-recherche/").subscribe(response => {
      this.guide = response;
    }, error => console.log(error));
  }
}
