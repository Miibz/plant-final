import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {Recherche} from "../model/recherche";

@Injectable({
  providedIn: 'root'
})
export class RechercheService {

  recherches: Array<Recherche> = new Array<Recherche>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Recherche> {
    return this.recherches;
  }

  findById(id: number): Observable<Recherche> {
    return this.http.get<Recherche> (this.appConfigService.backEndUrl + "recherche/" + id);
  }

  create(recherche : Recherche) {
    this.http.post<Recherche>(this.appConfigService.backEndUrl + "recherche/", recherche).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(recherche : Recherche) {
    this.http.put<Recherche>(this.appConfigService.backEndUrl + "recherche/" + recherche.id,recherche).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "recherche/" + id);
  }

  load() {
    this.http.get<Array<Recherche>>(this.appConfigService.backEndUrl + "recherche/").subscribe(response => {
      this.recherches= response;
    }, error => console.log(error));
  }
}
