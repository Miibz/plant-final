import { Component, OnInit } from '@angular/core';
import {VegetalHttpService} from "../../vegetal/vegetal-http.service";
import {Notice} from "../../model/notice";
import {Vegetal} from "../../model/vegetal";

@Component({
  selector: 'app-affichage-detail-plante',
  templateUrl: './affichage-detail-plante.component.html',
  styleUrls: ['./affichage-detail-plante.component.scss']
})
export class AffichageDetailPlanteComponent implements OnInit {
  vegetalForm:Vegetal=new Vegetal();
  vegetal:Vegetal=new Vegetal();
  constructor(private vegetalService:VegetalHttpService) { }

  list(): any {
    return this.vegetalService.findAll();
  }

  trouverParId(id:number)
  {
    this.vegetalService.findById(id).subscribe(response=>{
      this.vegetal=response;
    });
  }

  add() {
    this.vegetalForm = new Vegetal();
    this.vegetalForm.notice=new Notice();
    this.vegetalForm.affinites=new Array<Vegetal>();
  }

  edit(id: number) {
    this.vegetalService.findById(id).subscribe(resp => {
      this.vegetalForm = resp;
      if(!this.vegetalForm.notice)
      {
        this.vegetalForm.notice=new Notice();
      }
      if(!this.vegetalForm.affinites)
      {
        this.vegetalForm.affinites=new Array<Vegetal>();
      }
    });

  }

  save() {
    if (this.vegetalForm.id) {
      this.vegetalService.modify(this.vegetalForm);
    } else {
      this.vegetalService.create(this.vegetalForm);
    }

    this.vegetalForm = null;
  }


  delete(id:number)
  {
    this.vegetalService.deleteById(id).subscribe(resp => {
      this.vegetalService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.vegetalForm = null;
  }

  ngOnInit(): void {
  }

}
