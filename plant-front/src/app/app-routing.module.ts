import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonJardinComponent} from "./mon-jardin/mon-jardin.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes: Routes = [
  {path: "mon-jardin", component: MonJardinComponent},
  {path: "accueil", component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
