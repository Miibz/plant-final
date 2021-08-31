import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Recette} from "../model/recette";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AjoutRecetteHttpService {
  recettes : Array<Recette> = new Array<Recette>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
  this.load();
}

load() {
  this.http.get<Array<Recette>>(this.appConfigService.backEndUrl + "recette/").subscribe(response => {
    this.recettes = response;
  }, error => console.log(error));
}

findAll(): Array<Recette> {
  return this.recettes;
}

findById(id: number): Observable<Recette> {
  return this.http.get<Recette>(this.appConfigService.backEndUrl + "recette/" + id);
}

create(recette: Recette) {
  this.http.post<Recette>(this.appConfigService.backEndUrl + "recette/", recette).subscribe(response => {
    this.load();
  }, error => console.log(error));
}

modify(recette: Recette) {
  this.http.put<Recette>(this.appConfigService.backEndUrl + "recette/" + recette.id, recette).subscribe(response => {
    this.load();
  }, error => console.log(error));
}

deleteById(id: number): Observable<void> {
  return this.http.delete<void>(this.appConfigService.backEndUrl + "recette/" + id);
}


}
