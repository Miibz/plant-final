import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import { Vegetal } from '../model/vegetal';
import {Recherche} from "../model/recherche";


@Injectable({
  providedIn: 'root'
})
export class VegetalHttpService {
  jardins: Array<Vegetal> = new Array<Vegetal>();
  recherchePersonnelle: Array<Vegetal> = new Array<Vegetal>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Vegetal> {
    return this.jardins;
  }

  findAllBySearch(id :number):Observable<Array<Vegetal>>
  {
  return this.http.get<Array<Vegetal>>(this.appConfigService.backEndUrl + "vegetal/by-recherche/"+id);
  }

  findById(id: number): Observable<Vegetal> {
    return this.http.get<Vegetal>(this.appConfigService.backEndUrl + "vegetal/" + id);
  }
  save2(vegetal:Vegetal) {
    if (vegetal.id) {
      this.modify(vegetal);
    } else {
      this.create(vegetal);
    }
  }
  create(vegetal : Vegetal) {
    this.http.post<Vegetal>(this.appConfigService.backEndUrl + "vegetal/", vegetal).subscribe(response => {
      this.load();

    }, error => console.log(error));
  }

  create2(vegetal : Vegetal):Observable<Vegetal> {
    return this.http.post<Vegetal>(this.appConfigService.backEndUrl + "vegetal/", vegetal);
  }

  modify(vegetal : Vegetal) {
    this.http.put<Vegetal>(this.appConfigService.backEndUrl + "vegetal/" + vegetal.id, vegetal).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modifyReturn(vegetal : Vegetal) {
    return this.http.put<Vegetal>(this.appConfigService.backEndUrl + "vegetal/" + vegetal.id, vegetal);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "vegetal/" + id);
  }

  findAffinites1(id:number):Observable<Array<Vegetal>>
  {
    return this.http.get<Array<Vegetal>>(this.appConfigService.backEndUrl + "affinite/vegetaux1/" + id);
  }
  findAffinites2(id:number):Observable<Array<Vegetal>>
  {
    return this.http.get<Array<Vegetal>>(this.appConfigService.backEndUrl + "affinite/vegetaux2/" + id);
  }

  load() {
    this.http.get<Array<Vegetal>>(this.appConfigService.backEndUrl + "vegetal/").subscribe(response => {
      this.jardins = response;
    }, error => console.log(error));
  }
}
