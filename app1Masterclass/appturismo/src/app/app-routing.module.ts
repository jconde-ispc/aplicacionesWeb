import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {QuienessomosComponent} from './pages/quienessomos/quienessomos.component';
import {ServiciosComponent} from './pages/servicios/servicios.component';

import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import {NavbarComponent} from './shared/navbar/navbar.component';

const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'quienessomos', component:QuienessomosComponent},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'footer', component:FooterComponent},
    {path: 'header', component:HeaderComponent},
    {path: 'navbar', component:NavbarComponent},
    /*,
    {path: '', redirectTo:'/home', pathMatch:'full'}*/ //redireccionamiento por defecto

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
