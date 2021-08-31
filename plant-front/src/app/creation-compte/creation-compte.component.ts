import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {CreationCompteHttpService} from "./creation-compte-Http.service";
import {Adresse} from "../model/adresse";

@Component({
  selector: 'creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.scss']
})
export class CreationCompteComponent implements OnInit {

  utilisateurForm: Utilisateur = new Utilisateur();

  constructor(private creationService: CreationCompteHttpService) {
    this.add();

  }

  ngOnInit(): void {
  }

  list(): Array<Utilisateur> {
    console.log(this.creationService.findAll());
    return this.creationService.findAll();
  }


  add() {
    this.utilisateurForm = new Utilisateur();
    this.utilisateurForm.adresse = new Adresse();
  }

  edit(id: number) {
    this.creationService.findById(id).subscribe(resp => {
      this.utilisateurForm = resp;
      if (!this.utilisateurForm.adresse) {
        this.utilisateurForm.adresse = new Adresse();
      }
      console.log("utilisateurForm : "+this.utilisateurForm)


    })

  }

  save() {
    console.log(this.utilisateurForm );
    if (!this.utilisateurForm .id) {
      this.creationService.create(this.utilisateurForm);
    } else {
      this.creationService.modify(this.utilisateurForm);
    }
    this.utilisateurForm = null;
  }

  cancel() {
    this.utilisateurForm = null;
  }

  delete(id: number) {
    this.creationService.deleteById(id).subscribe(resp => {
      this.creationService.load();
    }, error => console.log(error));
  }

}



