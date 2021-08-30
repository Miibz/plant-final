import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonJardinComponent} from "./mon-jardin/mon-jardin.component";

const routes: Routes = [
  {path: "mon-jardin", component: MonJardinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
