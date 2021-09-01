import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {MonJardinComponent} from "./mon-jardin/mon-jardin.component";
import {DejaPlanteComponent} from "./deja-plante/deja-plante.component";
import {VegetalComponent} from "./vegetal/vegetal.component";
import {RechercheComponent} from "./recherche/recherche.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {CreationCompteComponent} from "./creation-compte/creation-compte.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {RecetteComponent} from "./recette/recette.component";
import {RechercheAlternativeComponent} from "./recherche-alternative/recherche-alternative.component";
import {FormsModule} from "@angular/forms";
import {AjoutRecetteComponent} from "./ajout-recette/ajout-recette.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BarreDeRechercheComponent} from "./barre-de-recherche/barre-de-recherche.component";


@NgModule({
  declarations: [
    AppComponent,
    MonJardinComponent,
    DejaPlanteComponent,
    VegetalComponent,
    RechercheComponent,
    RechercheAlternativeComponent,
    CreationCompteComponent,
    UtilisateurComponent,
    AccueilComponent,
    RecetteComponent,
    BarreDeRechercheComponent,
    AjoutRecetteComponent,
    ConnexionComponent
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
