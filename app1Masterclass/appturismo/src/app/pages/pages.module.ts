import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { ServiciosComponent } from './servicios/servicios.component'

import { RouterModule } from '@angular/router';
//Fuente: https://www.iteramos.com/pregunta/87426/routerlink-no-funciona



@NgModule({
  declarations: [
    HomeComponent,
    QuienessomosComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule, RouterModule//,SharedModule
  ],
  exports: [
    HomeComponent,
    QuienessomosComponent,
    ServiciosComponent
  ]
})
export class PagesModule { }
