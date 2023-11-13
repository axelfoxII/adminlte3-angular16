import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [{

    titulo: 'dashboard',
    icono: 'nav-icon fas fa-tachometer-alt',
    submenu: [
      { titulo: 'Usuarios', url: 'usuarios', icon:'fas fa-user' },
      { titulo: 'Productos', url: 'productos', icon:'fas fa-box' },
      { titulo: 'Stock', url: 'stock', icon:'fas fa-cube' },
    ]

  }];
  constructor() { }
}
