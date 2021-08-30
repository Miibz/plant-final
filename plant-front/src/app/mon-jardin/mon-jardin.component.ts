import {Component, HostListener, OnInit} from '@angular/core';
import {MonJardinHttpService} from "./mon-jardin-http.service";
import {VegetalHttpService} from "../vegetal/vegetal-http.service";
import {Jardin} from "../model/jardin";
import {DejaPlante} from "../model/dejaPlante";

@Component({
  selector: 'mon-jardin',
  templateUrl: './mon-jardin.component.html',
  styleUrls: ['./mon-jardin.component.scss']
})
export class MonJardinComponent implements OnInit {
  modifQuantite:boolean=false;
  nbrPieds:number=5;
  jardinForm: Jardin =new Jardin();
  idSession:number=1;
  mesPlantes:Array<DejaPlante>=new Array<DejaPlante>();
  monJardin:Jardin=new Jardin();

  constructor(private jardinService: MonJardinHttpService,private dejaPlanteService:VegetalHttpService) {
    this.load();

  }

  ngOnInit(): void {
  }

  load()
  {
    this.jardinService.findById(this.idSession).subscribe(resp => {
      this.monJardin=resp;
      this.mesPlantes=this.monJardin.dejaPlante;
    });
  }
  list(): Array<Jardin> {
return this.jardinService.findAll();
  }
  plante():Array<DejaPlante>
  {
   return this.mesPlantes.filter(p => p.vegetal.nature.indexOf("Replant")!==-1 && p.vegetal.nombre>0 );
  }
  arbre():Array<DejaPlante>
  {
    return this.mesPlantes.filter(p => p.vegetal.nature.indexOf("Arbre")!==-1 && p.vegetal.utilite.indexOf("Fruitier")!==-1 &&  p.vegetal.nombre>0);
  }
  plantNonChoisis():Array<DejaPlante>
  {
    return this.mesPlantes.filter(p => (p.vegetal.nature.indexOf("Arbre")!==-1 && p.vegetal.utilite.indexOf("Fruitier")!==-1 || p.vegetal.nature.indexOf("Replant")!==-1) &&  (p.vegetal.nombre==0 || p.vegetal.nombre==null) );
  }
  @HostListener("mouseenter")
  affiche(dejaPlante:DejaPlante)
  {
    dejaPlante.vegetal.affiche2=true;
  }
  @HostListener("mousleave")
  nAffichePas(dejaPlante:DejaPlante)
  {
    dejaPlante.vegetal.affiche2=false;
  }
  add() {
    this.jardinForm = new Jardin();
  }

  edit(id: number) {
    this.jardinService.findById(id).subscribe(resp => {
      this.jardinForm = resp;
    })
  }

  modifier(dejaPlante:DejaPlante)
  {
    dejaPlante.vegetal.nombre=dejaPlante.vegetal.nombre2;
    dejaPlante.vegetal.affiche=false;
    this.dejaPlanteService.modify(dejaPlante.vegetal);
  }
  ajouter(dejaPlante:DejaPlante)
  {
    dejaPlante.vegetal.nombre=1;
    dejaPlante.vegetal.affiche=false;
    this.dejaPlanteService.modify(dejaPlante.vegetal);
  }
  save() {
    if (this.jardinForm.id) {
      this.jardinService.modify(this.jardinForm);
    } else {
      this.jardinService.create(this.jardinForm);
    }

    this.jardinForm = new Jardin();
  }

  // pour l'exemple => mais de préférence coder le subscribe dans le service
  delete(id: number) {
    this.jardinService.deleteById(id).subscribe(resp => {
      this.jardinService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.jardinForm = new Jardin();
  }

}
