import { Injectable } from '@angular/core';
import {UserDTO} from "./model/userDto";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user:UserDTO;

  type:string;

  constructor() { }

  setUser(user: UserDTO) {
    this.user = user;
    this.type = user.type;
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}
