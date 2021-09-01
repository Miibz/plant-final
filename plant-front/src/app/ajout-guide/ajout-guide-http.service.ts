import { Injectable } from '@angular/core';
import {Guide} from "../model/guide";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AjoutGuideHttpService {
  guides : Array<Guide> = new Array<Guide>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get<Array<Guide>>(this.appConfigService.backEndUrl + "guide/").subscribe(response => {
      this.guides = response;
    }, error => console.log(error));
  }

  findAll(): Array<Guide> {
    return this.guides;
  }

  findById(id: number): Observable<Guide> {
    return this.http.get<Guide>(this.appConfigService.backEndUrl + "guide/" + id);
  }

  create(guide: Guide) {
    this.http.post<Guide>(this.appConfigService.backEndUrl + "guide/", guide).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(guide: Guide) {
    this.http.put<Guide>(this.appConfigService.backEndUrl + "guide/" + guide.id, guide).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "guide/" + id);
  }

}
