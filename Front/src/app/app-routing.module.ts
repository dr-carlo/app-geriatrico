import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoTutores } from './componentes/listas/lista-t/listado.component';
import { ListadoPacientes } from './componentes/listas/lista-p/listado.component';
import { RegistroComponent } from './componentes/registro/base/registro.component';

const routes: Routes = [
  { path: '' , component: ListadoPacientes},
  { path: 'listapac' , component: ListadoPacientes},
  { path: 'listatut' , component: ListadoTutores},
  { path: 'registro' , component: RegistroComponent},
  { path: '**' , pathMatch: 'full', redirectTo: 'listapac'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
