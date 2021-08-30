import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  backEndUrl: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }
  findAllNature(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "nature");
  }
  findAllTempsDeVie(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "tempsDeVie");
  }
  findAllPresentation(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "presentation");
  }
  findAllExposition(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "exposition");
  }
  findAllSol(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "sol");
  }

  findAllComportement(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "comportement");
  }

  findAllTypeDeFeuille(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "tempsDeFeuille");
  }
  findAllTempsDeFeuille(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "tempsDeFeuille");
  }
  findAllUtilite(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "utilite");
  }
  findAllUtiliteOrnement(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "utiliteOrnement");
  }
  findAllUtiliteGastronomie(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "utiliteGastronomie");
  }
  findAllCouleur(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "couleur");
  }
  findAllNUtiliteComposition(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "utiliteComposition");
  }
  findAllCimetiere(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "utiliteCimetiere");
  }

}
