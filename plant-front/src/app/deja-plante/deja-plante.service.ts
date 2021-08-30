import { Injectable } from '@angular/core';
import {Jardin} from "../../../../../../travail/test/Plant-Boot/src/app/model/jardin";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {DejaPlante} from "../../../../../../travail/test/Plant-Boot/src/app/model/dejaPlante";

@Injectable({
  providedIn: 'root'
})
export class DejaPlanteService {
  jardins: Array<DejaPlante> = new Array<DejaPlante>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<DejaPlante> {
    return this.jardins;
  }

  findById(id: number): Observable<DejaPlante> {
    return this.http.get<DejaPlante>(this.appConfigService.backEndUrl + "dejaPlante/" + id);
  }


  create(dejaPlante: DejaPlante) {
    this.http.post<DejaPlante>(this.appConfigService.backEndUrl + "dejaPlante/", dejaPlante).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(dejaPlante: DejaPlante) {
    this.http.put<DejaPlante>(this.appConfigService.backEndUrl + "dejaPlante/" + dejaPlante.id, dejaPlante).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "dejaPlante/" + id);
  }

  load() {
    this.http.get<Array<DejaPlante>>(this.appConfigService.backEndUrl + "dejaPlante/").subscribe(response => {
      this.jardins = response;
    }, error => console.log(error));
  }
}
