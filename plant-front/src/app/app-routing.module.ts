import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonJardinComponent} from "./mon-jardin/mon-jardin.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {RechercheAlternativeComponent} from "./recherche-alternative/recherche-alternative.component";
import {BarreDeRechercheComponent} from "./barre-de-recherche/barre-de-recherche.component";
import {DejaPlanteComponent} from "./deja-plante/deja-plante.component";
import {RecetteComponent} from "./recette/recette.component";
import {AjoutRecetteComponent} from "./ajout-recette/ajout-recette.component";
import {LectureGuideComponent} from "./lecture-guide/lecture-guide.component";
import {GuideComponent} from "./guide/guide.component";
import {CreationCompteComponent} from "./creation-compte/creation-compte.component";
import {AjoutGuideComponent} from "./ajout-guide/ajout-guide.component";
import {LectureRecetteComponent} from "./lecture-recette/lecture-recette.component";
import {AdminAjoutPlanteComponent} from "./admin/admin-ajout-plante/admin-ajout-plante.component";
import {LectureVegetalComponent} from "./lecture-vegetal/lecture-vegetal.component";

const routes: Routes = [
  {path: "mon-jardin", component: MonJardinComponent},
  {path: "recherche2", component: RechercheAlternativeComponent},
  {path: "admin-ajout-plante", component: AdminAjoutPlanteComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "barre-de-recherche", component: BarreDeRechercheComponent},
  {path: "app-deja-plante", component: DejaPlanteComponent},
  {path: "creation-compte", component: CreationCompteComponent},
  {path: "ajout-recette", component: AjoutRecetteComponent},
  {path: "ajout-guide", component: AjoutGuideComponent},
  // {path: "ajout-plante", component: AjoutPlanteComponent},
  {path: "nos-recettes", component: RecetteComponent},
  {path: "nos-guides", component: GuideComponent},
  {path: "connexion", component: ConnexionComponent},
  {path: "recette/:id", component: LectureRecetteComponent},
  {path: "guide/:id", component: LectureGuideComponent},
  {path: "vegetal/:id", component: LectureVegetalComponent},


  {path: "recette/:id", component: LectureRecetteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
