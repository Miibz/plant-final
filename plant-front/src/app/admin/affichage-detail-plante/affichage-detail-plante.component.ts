import { Component, OnInit } from '@angular/core';
import {VegetalHttpService} from "../../vegetal/vegetal-http.service";
import {Notice} from "../../model/notice";
import {Vegetal} from "../../model/vegetal";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-affichage-detail-plante',
  templateUrl: './affichage-detail-plante.component.html',
  styleUrls: ['./affichage-detail-plante.component.scss']
})
export class AffichageDetailPlanteComponent implements OnInit {
  vegetal: Vegetal = new Vegetal();
  id: number;

  constructor(private route: ActivatedRoute, private vegetalService: VegetalHttpService) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.vegetalService.findById(this.id).subscribe(param => {
        this.vegetal = param;
      })
    })

  }
}
