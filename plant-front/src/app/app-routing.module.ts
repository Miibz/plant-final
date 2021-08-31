import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonJardinComponent} from "./mon-jardin/mon-jardin.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {AjoutRecetteComponent} from "./ajout-recette/ajout-recette.component";
import {RecetteComponent} from "./recette/recette.component";

const routes: Routes = [
  {path: "mon-jardin", component: MonJardinComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "ajout-recette", component: AjoutRecetteComponent},
  // {path: "ajout-guide", component: AjoutGuideComponent},
  // {path: "ajout-plante", component: AjoutPlanteComponent},
  {path: "nos-recettes", component: RecetteComponent},
  // {path: "nos-guides", component: GuideComponent},

  {path: "connexion", component: ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
