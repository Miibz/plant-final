import { Component, OnInit } from '@angular/core';
import {AjoutGuideHttpService} from "../ajout-guide/ajout-guide-http.service";
import {Guide} from "../model/guide";

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  constructor(private guideService : AjoutGuideHttpService) { }

  list(): Array<Guide> {
    return this.guideService.findAll();
  }

  ngOnInit(): void {
  }

}
