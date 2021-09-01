import { Component, OnInit } from '@angular/core';
import {Notice} from "../model/notice";
import {NoticeHttpService} from "../notice-http.service";
import {VegetalHttpService} from "./vegetal-http.service";
import {Vegetal} from "../model/vegetal";

@Component({
  selector: 'app-vegetal',
  templateUrl: './vegetal.component.html',
  styleUrls: ['./vegetal.component.scss']
})
export class VegetalComponent implements OnInit {
  vegetalForm : Vegetal=null;
  constructor(private noticeService : NoticeHttpService, private vegetalService : VegetalHttpService) {
  }


  list(): any {
    return this.vegetalService.findAll();
  }

  listNotice(): Array<Notice>
  {
    return this.noticeService.findAll();
  }
  listAffinites(): Array<Vegetal>
  {
    return this.vegetalService.findAll();
  }


  add() {
    this.vegetalForm = new Vegetal();
    this.vegetalForm.notice=new Notice();
    this.ueForm.formateur=new Formateur();
  }

  edit(id: number) {
    this.vegetalService.findById(id).subscribe(resp => {
      this.ueForm = resp;
      if(!this.ueForm.filiere)
      {
        this.ueForm.filiere=new Filiere();
      }
      if(!this.ueForm.formateur)
      {
        this.ueForm.formateur=new Formateur();
      }
      if(!this.ueForm.matiere)
      {
        this.ueForm.matiere=new Matiere();
      }
      if(!this.ueForm.salle)
      {
        this.ueForm.salle=new Salle();
      }
    });

  }

  save() {
    if (this.ueForm.id) {
      this.vegetalService.modify(this.ueForm);
    } else {
      this.vegetalService.create(this.ueForm);
    }

    this.ueForm = null;
  }

  delete(id:number)
  {
    this.vegetalService.deleteById(id).subscribe(resp => {
      this.vegetalService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.ueForm = null;
  }
  ngOnInit(): void {
  }

}
