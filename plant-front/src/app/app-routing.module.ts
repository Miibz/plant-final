import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonJardinComponent} from "./mon-jardin/mon-jardin.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {RechercheAlternativeComponent} from "./recherche-alternative/recherche-alternative.component";

const routes: Routes = [
  {path: "mon-jardin", component: MonJardinComponent},
  {path: "recherche2", component: RechercheAlternativeComponent},
  {path: "accueil", component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
