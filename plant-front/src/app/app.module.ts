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
import {RechercheComponent} from "./recherche/recherche.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {AccueilComponent} from "./accueil/accueil.component";
import { CreationCompteComponent } from './creation-compte/creation-compte.component';


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
    CreationCompteComponent,

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
