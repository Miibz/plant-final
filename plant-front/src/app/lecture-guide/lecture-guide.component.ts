import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AjoutRecetteHttpService} from "../ajout-recette/ajoutRecetteHttp.service";
import {Recette} from "../model/recette";
import {Guide} from "../model/guide";
import {AjoutGuideHttpService} from "../ajout-guide/ajout-guide-http.service";

@Component({
  selector: 'app-lecture-guide',
  templateUrl: './lecture-guide.component.html',
  styleUrls: ['./lecture-guide.component.scss']
})
export class LectureGuideComponent implements OnInit {

  id: number;
  guide: Guide = new Guide();

  constructor(private route: ActivatedRoute, private ajoutGuideService: AjoutGuideHttpService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;

      this.ajoutGuideService.findById(this.id).subscribe(param => {
        this.guide = param;
      })
    })
  }
}
