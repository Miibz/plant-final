import { Injectable } from '@angular/core';
import {Notice} from "../model/notice";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {Affinite} from "../model/Affinite";
import {Vegetal} from "../model/vegetal";

@Injectable({
  providedIn: 'root'
})
export class AffiniteService {

  jardins: Array<Affinite> = new Array<Affinite>();

  constructor(private http: HttpClient,private appConfigService:AppConfigService) {
    this.load();
  }

  findAll(): Array<Affinite> {
    return this.jardins;
  }

  findById(id: number): Observable<Affinite> {
    return this.http.get<Affinite>(this.appConfigService.backEndUrl + "affinite/" + id);
  }

  create(affinite: Affinite) {
    this.http.post<Affinite>(this.appConfigService.backEndUrl + "affinite/", affinite).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }
  save2(affinite:Affinite) {
    if (affinite.id) {
      this.modify(affinite);
    } else {
      this.create(affinite);
    }
  }
  modify(affinite: Affinite) {
    this.http.put<Affinite>(this.appConfigService.backEndUrl + "affinite/" + affinite.id, affinite).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "affinite/" + id);
  }

  load() {
    this.http.get<Array<Affinite>>(this.appConfigService.backEndUrl + "affinite/").subscribe(response => {
      this.jardins = response;
    }, error => console.log(error));
  }
}
