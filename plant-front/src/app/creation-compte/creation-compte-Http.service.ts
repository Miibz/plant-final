import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {Utilisateur} from "../model/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class CreationCompteHttpService {

  personnes: Array<Utilisateur> = new Array<Utilisateur>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();

  }

  findAll(): Array<Utilisateur> {
    return this.personnes;
  }

  findById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur> (this.appConfigService.backEndUrl + "utilisateur/" + id);
  }

  create(personne : Utilisateur) {
    this.http.post<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/", personne).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(personne : Utilisateur) {
    this.http.put<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/" + personne.id, personne).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "utilisateur/" + id);
  }

  load() {
    this.http.get<Array<Utilisateur>>(this.appConfigService.backEndUrl + "utilisateur/").subscribe(response => {
      this.personnes= response;
    }, error => console.log(error));
  }
}
