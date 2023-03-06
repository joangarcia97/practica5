import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { VistausuarioComponent } from './components/vistausuario/vistausuario.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'home'},
  { path: "home", component: HomeComponent},
  { path: "user/:id", component: VistausuarioComponent},
  { path: "newuser", component: FormComponent},
  { path: "updateuser/:id", component: FormComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
