import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import { Vegetal } from '../model/vegetal';


@Injectable({
  providedIn: 'root'
})
export class VegetalHttpService {
  jardins: Array<Vegetal> = new Array<Vegetal>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Vegetal> {
    return this.jardins;
  }

  findById(id: number): Observable<Vegetal> {
    return this.http.get<Vegetal>(this.appConfigService.backEndUrl + "vegetal/" + id);
  }


  create(vegetal : Vegetal) {
    this.http.post<Vegetal>(this.appConfigService.backEndUrl + "vegetal/", vegetal).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(vegetal : Vegetal) {
    this.http.put<Vegetal>(this.appConfigService.backEndUrl + "vegetal/" + vegetal.id, vegetal).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "vegetal/" + id);
  }

  load() {
    this.http.get<Array<Vegetal>>(this.appConfigService.backEndUrl + "vegetal/").subscribe(response => {
      this.jardins = response;
    }, error => console.log(error));
  }
}
