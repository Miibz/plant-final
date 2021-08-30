import { Component, OnInit } from '@angular/core';
import { Vegetal } from '../model/vegetal';
import {BarreDeRechercheService} from "./barre-de-recherche.service";

@Component({
  selector: 'barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.scss']
})
export class BarreDeRechercheComponent implements OnInit {

  VegetalForm: Vegetal = null;

  constructor(private barreDeRechercheService: BarreDeRechercheService) { }

  ngOnInit(): void {
  }



}
