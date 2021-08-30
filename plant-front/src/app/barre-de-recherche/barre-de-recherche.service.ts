import { Injectable } from '@angular/core';
import {Vegetal} from "../model/vegetal";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BarreDeRechercheService {

  vegetaux: Array<Vegetal> = new Array<Vegetal>();

  constructor(private http : HttpClient,private appConfigService:AppConfigService) {
    this.load();
  }

  findWithNom(nom: string): Observable<Vegetal> {
    return this.http.get<Vegetal>(this.appConfigService.backEndUrl+"barre-de-recherche/"+ nom);
  }

  load() {
    this.http.get<Array<Vegetal>>(this.appConfigService.backEndUrl + "barre-de-recherche/").subscribe(response => {
      this.vegetaux = response;
    }, error => console.log(error));
  }
}
