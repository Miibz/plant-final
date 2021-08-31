import { Component, OnInit } from '@angular/core';
import {Recette} from "../model/recette";
import {AjoutRecetteHttpService} from "./ajoutRecetteHttp.service";

@Component({
  selector: 'ajout-recette',
  templateUrl: './ajout-recette.component.html',
  styleUrls: ['./ajout-recette.component.scss']
})
export class AjoutRecetteComponent implements OnInit {

  recetteForm : Recette = new Recette();

  constructor(private ajoutRecetteService : AjoutRecetteHttpService) { }

  ngOnInit(): void {
  }

  add() {
    this.recetteForm = new Recette();
  }

  edit(id: number) {
    this.ajoutRecetteService.findById(id).subscribe(resp => {
      this.recetteForm = resp;
    })
  }

  save() {
    if (!this.recetteForm.id) {
      this.ajoutRecetteService.create(this.recetteForm);
    } else {
      this.ajoutRecetteService.modify(this.recetteForm);
    }
    this.recetteForm = new Recette();
  }

  cancel() {
    this.recetteForm = new Recette();
  }

  list(): Array<Recette> {
    return this.ajoutRecetteService.findAll();
  }

  delete(id: number) {
    this.ajoutRecetteService.deleteById(id).subscribe(resp => {
      this.ajoutRecetteService.load();
    }, error => console.log(error));
  }

}
