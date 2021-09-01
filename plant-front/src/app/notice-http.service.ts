import { Injectable } from '@angular/core';
import {Vegetal} from "./model/vegetal";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "./app-config.service";
import {Observable} from "rxjs";
import {Notice} from "./model/notice";

@Injectable({
  providedIn: 'root'
})
export class NoticeHttpService {

  jardins: Array<Notice> = new Array<Notice>();

  constructor(private http: HttpClient,private appConfigService:AppConfigService) {
    this.load();
  }

  findAll(): Array<Notice> {
    return this.jardins;
  }

  findById(id: number): Observable<Notice> {
    return this.http.get<Notice>(this.appConfigService.backEndUrl + "notice/" + id);
  }

  create(notice : Notice) {
    this.http.post<Notice>(this.appConfigService.backEndUrl + "notice/", notice).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(notice : Notice) {
    this.http.put<Notice>(this.appConfigService.backEndUrl + "notice/" + notice.id, notice).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "notice/" + id);
  }

  load() {
    this.http.get<Array<Notice>>(this.appConfigService.backEndUrl + "notice/").subscribe(response => {
      this.jardins = response;
    }, error => console.log(error));
  }
}
