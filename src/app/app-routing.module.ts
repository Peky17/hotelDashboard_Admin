import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';

const app_routes: Routes= [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'panel', pathMatch: 'full', redirectTo: 'panel/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
