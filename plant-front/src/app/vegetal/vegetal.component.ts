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
