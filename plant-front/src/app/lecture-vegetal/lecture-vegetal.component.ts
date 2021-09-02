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
  affinites1: Array<Vegetal>=new Array<Vegetal>();
  affinites2: Array<Vegetal>=new Array<Vegetal>();
  affinites: Array<Vegetal>=new Array<Vegetal>();

  constructor(private route : ActivatedRoute, private vegetalService : VegetalHttpService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.vegetalService.findById(this.id).subscribe(param => {
        this.vegetal= param;
        this.vegetalService.findAffinites1(this.id).subscribe(rep1 => {
          this.affinites1=rep1;
          this.vegetalService.findAffinites2(this.id).subscribe(rep2 =>{
            this.affinites2=rep2;
            this.affinites=this.affinites1.concat(this.affinites2);
            console.log(this.affinites1);
            console.log(this.affinites2);
            console.log(this.affinites);
            console.log(this.vegetal);
            console.log(this.id);
          })
        })
      })
    })
  }

}
