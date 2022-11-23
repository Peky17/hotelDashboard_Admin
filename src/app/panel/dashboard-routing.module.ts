import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: 'panel', component: PanelComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'usuarios', component: UsuariosComponent}
    ] 
  },
  { path: '', pathMatch: 'full', redirectTo: 'panel' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
