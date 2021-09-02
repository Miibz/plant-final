import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {MonJardinComponent} from "./mon-jardin/mon-jardin.component";
import {DejaPlanteComponent} from "./deja-plante/deja-plante.component";
import {VegetalComponent} from "./vegetal/vegetal.component";
import {CreationCompteComponent} from "./creation-compte/creation-compte.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {AccueilComponent} from "./accueil/accueil.component";
import { AdminAjoutPlanteComponent } from './admin/admin-ajout-plante/admin-ajout-plante.component';
import {BarreDeRechercheComponent} from "./barre-de-recherche/barre-de-recherche.component";
import { AjoutGuideComponent } from './ajout-guide/ajout-guide.component';
import { LectureRecetteComponent } from './lecture-recette/lecture-recette.component';
import { LectureGuideComponent } from './lecture-guide/lecture-guide.component';
import { GuideComponent } from './guide/guide.component';
import {RechercheComponent} from "./recherche/recherche.component";
import {RechercheAlternativeComponent} from "./recherche-alternative/recherche-alternative.component";
import {RecetteComponent} from "./recette/recette.component";
import { AjoutRecetteComponent } from "./ajout-recette/ajout-recette.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {AdminModifierPlanteComponent} from "./admin/admin-modifier-plante/admin-modifier-plante.component";
import {LectureVegetalComponent} from "./lecture-vegetal/lecture-vegetal.component";


@NgModule({
  declarations: [
    AppComponent,
    MonJardinComponent,
    DejaPlanteComponent,
    VegetalComponent,
    RechercheComponent,
    RechercheAlternativeComponent,
    UtilisateurComponent,
    AccueilComponent,
    AdminAjoutPlanteComponent,
    CreationCompteComponent,
    UtilisateurComponent,
    AccueilComponent,
    RecetteComponent,
    BarreDeRechercheComponent,
    AjoutRecetteComponent,
    ConnexionComponent,
    AjoutGuideComponent,
    LectureRecetteComponent,
    LectureGuideComponent,
    GuideComponent,
    LectureVegetalComponent,
    AdminModifierPlanteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
