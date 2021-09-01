import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonJardinComponent} from "./mon-jardin/mon-jardin.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {AjoutRecetteComponent} from "./ajout-recette/ajout-recette.component";
import {RecetteComponent} from "./recette/recette.component";
import {RechercheAlternativeComponent} from "./recherche-alternative/recherche-alternative.component";
import {BarreDeRechercheComponent} from "./barre-de-recherche/barre-de-recherche.component";
import {DejaPlanteComponent} from "./deja-plante/deja-plante.component";

const routes: Routes = [
  {path: "mon-jardin", component: MonJardinComponent},
  {path: "recherche2", component: RechercheAlternativeComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "barre-de-recherche", component: BarreDeRechercheComponent},
  {path: "app-deja-plante", component: DejaPlanteComponent},

  {path: "ajout-recette", component: AjoutRecetteComponent},
  // {path: "ajout-guide", component: AjoutGuideComponent},
  // {path: "ajout-plante", component: AjoutPlanteComponent},
  {path: "nos-recettes", component: RecetteComponent},
  // {path: "nos-guides", component: GuideComponent},
  {path: "connexion", component: ConnexionComponent},
  {path: "recette/:id", component: LectureRecetteComponent},
  {path: "guide/:id", component: LectureRecetteComponent},
  {path: "vegetal/:id", component: LectureRecetteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
