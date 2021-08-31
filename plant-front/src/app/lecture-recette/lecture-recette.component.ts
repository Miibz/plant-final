import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AjoutRecetteHttpService} from "../ajout-recette/ajoutRecetteHttp.service";
import {Recette} from "../model/recette";

@Component({
  selector: 'app-lecture-recette',
  templateUrl: './lecture-recette.component.html',
  styleUrls: ['./lecture-recette.component.scss']
})
export class LectureRecetteComponent implements OnInit {

  id: number;
  recette : Recette = new Recette();

  constructor(private route : ActivatedRoute, private ajoutRecetteService : AjoutRecetteHttpService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;

      this.ajoutRecetteService.findById(this.id).subscribe(param => {
        this.recette= param;
      })
    })



  }


}
