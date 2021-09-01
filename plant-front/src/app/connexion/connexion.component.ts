import { Component, OnInit } from '@angular/core';
import {ConnexionService} from "./connexion.service";
import {SessionService} from "../session.service";
import {UserDTO} from "../model/userDto";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  userForm: UserDTO = new UserDTO();


  constructor(private connexionService: ConnexionService, private sessionService: SessionService) {
  }
  ngOnInit(): void {
  }
  connexion() {
    console.log(this.userForm)
    this.connexionService.authentification(this.userForm).subscribe(resp => {
      this.userForm = resp;
      this.sessionService.setUser(resp);
    }, error => {
      console.log("Probleme d'identification");
    });
  }
}
