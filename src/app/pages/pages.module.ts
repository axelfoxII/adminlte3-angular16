import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosComponent } from './productos/productos.component';
import { StockComponent } from './stock/stock.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductosComponent,
    StockComponent,
    UsuariosComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    StockComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
