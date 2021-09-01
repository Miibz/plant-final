import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";

import {Observable} from "rxjs";
import {UserDTO} from "../model/userDto";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  chemin: string;

  constructor(private http : HttpClient,private appconfig:AppConfigService) {
    this.chemin = this.appconfig.backEndUrl + "connexion/";
  }

  authentification(user: UserDTO): Observable<UserDTO> {
    console.log(user);
    return this.http.post<UserDTO>(this.chemin, user);
  }
}
