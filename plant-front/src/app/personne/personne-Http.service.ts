import { Injectable } from '@angular/core';
import {Personne} from "../model/personne";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonneHttpService {
  personnes: Array<Personne> = new Array<Personne>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Personne> {
    return this.personnes;
  }

  findById(id: number): Observable<Personne> {
    return this.http.get<Personne> (this.appConfigService.backEndUrl + "personne/" + id);
  }

  create(personne : Personne) {
    this.http.post<Personne>(this.appConfigService.backEndUrl + "personne/", personne).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(personne : Personne) {
    this.http.put<Personne>(this.appConfigService.backEndUrl + "personne/" + personne.id, personne).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "personne/" + id);
  }

  load() {
    this.http.get<Array<Personne>>(this.appConfigService.backEndUrl + "personne/").subscribe(response => {
      this.personnes= response;
    }, error => console.log(error));
  }
}
