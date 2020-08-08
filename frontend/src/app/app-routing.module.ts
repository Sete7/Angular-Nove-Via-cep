import { FormularioDeleteComponent } from './components/formulario/formulario-delete/formulario-delete.component';
import { FormularioUpdateComponent } from './components/formulario/formulario-update/formulario-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FormularioCrudComponent } from "./views/formulario-crud/formulario-crud.component";
import { FormularioCreateComponent } from "./components/formulario/formulario-create/formulario-create.component";


const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
{
  path: "formulario",
  component: FormularioCrudComponent
},
{
  path: "formulario/create",
  component: FormularioCreateComponent

},
{
  path: "formulario/update/:id",
  component: FormularioUpdateComponent
},
{
  path: "formulario/delete/:id",
  component: FormularioDeleteComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
