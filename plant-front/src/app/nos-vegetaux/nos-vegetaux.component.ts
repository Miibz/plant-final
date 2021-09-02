import { Component, OnInit } from '@angular/core';
import {VegetalHttpService} from "../vegetal/vegetal-http.service";
import {SessionService} from "../session.service";

@Component({
  selector: 'app-nos-vegetaux',
  templateUrl: './nos-vegetaux.component.html',
  styleUrls: ['./nos-vegetaux.component.scss']
})
export class NosVegetauxComponent implements OnInit {

  constructor(private vegetalService:VegetalHttpService,private sessionService: SessionService) { }
  list(): any {
    return this.vegetalService.findAll();
  }

  ngOnInit(): void {
  }

  isType(type: string):boolean {
    return this.sessionService.type == type;
  }
}
