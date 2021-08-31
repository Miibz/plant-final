import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MonJardinComponent} from "./mon-jardin/mon-jardin.component";
import {DejaPlanteComponent} from "./deja-plante/deja-plante.component";
import {VegetalComponent} from "./vegetal/vegetal.component";
import {RechercheAlternativeComponent} from "./recherche-alternative/recherche-alternative.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PersonneComponent} from "./personne/personne.component";
import {RechercheComponent} from "./recherche/recherche.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import { RecetteComponent } from './recette/recette.component';
import { AjoutRecetteComponent } from './ajout-recette/ajout-recette.component';

@NgModule({
  declarations: [
    AppComponent,
    MonJardinComponent,
    DejaPlanteComponent,
    VegetalComponent,
    PersonneComponent,
    RechercheComponent,
    RechercheAlternativeComponent,
    UtilisateurComponent,
    AccueilComponent,
    RecetteComponent,
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
