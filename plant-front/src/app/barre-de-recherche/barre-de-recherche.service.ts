import { Injectable } from '@angular/core';
import {Vegetal} from "../model/vegetal";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {GuideUtilisation} from "../model/guideUtilisation";
import {Recette} from "../model/recette";
import {Guide} from "../model/guide";

@Injectable({
  providedIn: 'root'
})
export class BarreDeRechercheService {

  vegetaux: Array<Vegetal> = new Array<Vegetal>();
  recettes: Array<Recette> = new Array<Recette>();
  guides: Array<Guide> = new Array<Guide>();


  constructor(private http : HttpClient,private appConfigService:AppConfigService) {

  }

  findVegetauxWithNom(nom: string): Observable<Array<Vegetal>> {
    return this.http.get<Array<Vegetal>>(this.appConfigService.backEndUrl+"vegetal/recherche/"+ nom);
  }

  findGuidesWithNom(nom: string): Observable<Array<Guide>> {
    return this.http.get<Array<Guide>>(this.appConfigService.backEndUrl+"guide/recherche/"+ nom);
  }

  findRecettesWithNom(nom: string): Observable<Array<Recette>> {
    return this.http.get<Array<Recette>>(this.appConfigService.backEndUrl+"recette/recherche/"+ nom);
  }

  loadVegetal() {
    this.http.get<Array<Vegetal>>(this.appConfigService.backEndUrl + "vegetal/recherche/").subscribe(response => {
      this.vegetaux = response;
    }, error => console.log(error));
  }

  loadRecette() {
    this.http.get<Array<Recette>>(this.appConfigService.backEndUrl + "recette/recherche/").subscribe(response => {
      this.recettes = response;
    }, error => console.log(error));
  }

  loadGuide() {
    this.http.get<Array<Guide>>(this.appConfigService.backEndUrl + "guide/recherche/").subscribe(response => {
      this.guides = response;
    }, error => console.log(error));
  }
}
