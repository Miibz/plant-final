import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {VegetalComponent} from "./vegetal/vegetal.component";
import {RechercheAlternativeComponent} from "./recherche-alternative/recherche-alternative.component";
import {CreationCompteComponent} from "./creation-compte/creation-compte.component";
import {MonJardinComponent} from "./mon-jardin/mon-jardin.component";
import {RechercheComponent} from "./recherche/recherche.component";
import {DejaPlanteComponent} from "./deja-plante/deja-plante.component";
import {AdminAjoutPlanteComponent} from "./admin/admin-ajout-plante/admin-ajout-plante.component";
import {AjoutRecetteComponent} from "./ajout-recette/ajout-recette.component";
import {AdminModifierPlanteComponent} from "./admin/admin-modifier-plante/admin-modifier-plante.component";
import {LectureRecetteComponent} from "./lecture-recette/lecture-recette.component";
import {AppRoutingModule} from "./app-routing.module";
import {LectureGuideComponent} from "./lecture-guide/lecture-guide.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {BarreDeRechercheComponent} from "./barre-de-recherche/barre-de-recherche.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {AdminModifierPlanteComponent} from "./admin/admin-modifier-plante/admin-modifier-plante.component";
import {AffichageDetailPlanteComponent} from "./admin/affichage-detail-plante/affichage-detail-plante.component";
import {LectureVegetalComponent} from "./lecture-vegetal/lecture-vegetal.component";
import {GuideComponent} from "./guide/guide.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RecetteComponent} from "./recette/recette.component";



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
