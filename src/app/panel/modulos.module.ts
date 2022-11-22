import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule
  ]
})
export class ModulosModule { }
