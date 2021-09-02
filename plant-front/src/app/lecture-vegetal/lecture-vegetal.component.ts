import { Component, OnInit } from '@angular/core';
import {Recette} from "../model/recette";
import {Vegetal} from "../model/vegetal";
import {ActivatedRoute} from "@angular/router";
import {AjoutRecetteHttpService} from "../ajout-recette/ajoutRecetteHttp.service";
import {VegetalHttpService} from "../vegetal/vegetal-http.service";

@Component({
  selector: 'app-lecture-vegetal',
  templateUrl: './lecture-vegetal.component.html',
  styleUrls: ['./lecture-vegetal.component.scss']
})
export class LectureVegetalComponent implements OnInit {

  id: number;
  vegetal : Vegetal = new Vegetal();

  constructor(private route : ActivatedRoute, private vegetalService : VegetalHttpService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.vegetalService.findById(this.id).subscribe(param => {
        this.vegetal= param;
      })
    })



  }
}
