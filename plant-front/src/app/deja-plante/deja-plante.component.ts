import { Component, OnInit } from '@angular/core';
import {Vegetal} from "../model/vegetal";
import {DejaPlanteService} from "./deja-plante.service";
import {Jardin} from "../model/jardin";
import {DejaPlante} from "../model/dejaPlante";


@Component({
  selector: 'app-deja-plante',
  templateUrl: './deja-plante.component.html',
  styleUrls: ['./deja-plante.component.scss']
})
export class DejaPlanteComponent implements OnInit {
  dejaPlante:DejaPlante =null;
  constructor(private dejaPlanteService : DejaPlanteService) {
  }

  list(): any {
    return this.dejaPlanteService.findAll();
  }



  add() {
    this.dejaPlante = new DejaPlante();
  }

  edit(id: number) {
    this.dejaPlanteService.findById(id).subscribe(resp => {
      this.dejaPlante=resp;
      if(!this.dejaPlante.vegetal)
      {
        this.dejaPlante.vegetal=new Vegetal();
      }
      if(!this.dejaPlante.jardin)
      {
        this.dejaPlante.jardin=new Jardin();
      }
    });

  }

  save() {
    if (this.dejaPlante.id) {
      this.dejaPlanteService.modify(this.dejaPlante);
    } else {
      this.dejaPlanteService.create(this.dejaPlante);
    }

    this.dejaPlante = null;
  }

  delete(id:number)
  {
    this.dejaPlanteService.deleteById(id).subscribe(resp => {
      this.dejaPlanteService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.dejaPlante = null;
  }
  ngOnInit(): void {
  }

}
