import { Component, OnInit } from '@angular/core';
import {Guide} from "../model/guide";
import {AjoutGuideHttpService} from "./ajout-guide-http.service";

@Component({
  selector: 'app-ajout-guide',
  templateUrl: './ajout-guide.component.html',
  styleUrls: ['./ajout-guide.component.scss']
})
export class AjoutGuideComponent implements OnInit {

  guideForm : Guide = new Guide();
  click : boolean = false;

  constructor(private ajoutGuideService : AjoutGuideHttpService) { }

  ngOnInit(): void {
  }

  add() {
    this.guideForm = new Guide();
  }

  edit(id: number) {
    this.ajoutGuideService.findById(id).subscribe(resp => {
      this.guideForm = resp;
    })
  }

  save() {
    if (!this.guideForm.id) {
      this.ajoutGuideService.create(this.guideForm);
    } else {
      this.ajoutGuideService.modify(this.guideForm);
    }
    this.guideForm = new Guide();
  }

  cancel() {
    this.guideForm = new Guide();
  }

  list(): Array<Guide> {
    return this.ajoutGuideService.findAll();
  }

  delete(id: number) {
    this.ajoutGuideService.deleteById(id).subscribe(resp => {
      this.ajoutGuideService.load();
    }, error => console.log(error));
  }

}
