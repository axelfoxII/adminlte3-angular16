import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  
  constructor(private sidebarService: SidebarService) {

    this.menuItems = this.sidebarService.menu;
    console.log(this.menuItems);

    $('[data-widget="treeview"]').Treeview('init');

  }

  ngOnInit() {

    $('[data-widget="treeview"]').Treeview('init');
   
  }


  logout(){
    location.href='login';
  }

}
