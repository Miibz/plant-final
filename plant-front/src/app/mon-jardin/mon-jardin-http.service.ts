import { Injectable } from '@angular/core';
import {Jardin} from "../model/jardin";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConfigService} from "../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class MonJardinHttpService {


  jardins: Array<Jardin> = new Array<Jardin>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Jardin> {
    return this.jardins;
  }

  findById(id: number): Observable<Jardin> {
    return this.http.get<Jardin>(this.appConfigService.backEndUrl + "jardin/" + id);
  }


  create(jardin: Jardin) {
    this.http.post<Jardin>(this.appConfigService.backEndUrl + "jardin/", jardin).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(jardin: Jardin) {
    this.http.put<Jardin>(this.appConfigService.backEndUrl + "jardin/" + jardin.id, jardin).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "jardin/" + id);
  }

  load() {
    this.http.get<Array<Jardin>>(this.appConfigService.backEndUrl + "jardin/").subscribe(response => {
      this.jardins = response;
    }, error => console.log(error));
  }
}
