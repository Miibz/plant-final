import { Component, OnInit } from '@angular/core';
import {AjoutRecetteHttpService} from "../ajout-recette/ajoutRecetteHttp.service";
import {Recette} from "../model/recette";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  constructor(private recetteService : AjoutRecetteHttpService) { }

  list(): Array<Recette> {
    return this.recetteService.findAll();
  }

  ngOnInit(): void {
  }

}
