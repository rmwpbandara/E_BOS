import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: '', class: '' },
  { path: '/dashboard/products-add', title: 'Add Product',  icon:'', class: '' },
  { path: '/dashboard/products-view', title: 'View Products',  icon:'', class: '' }
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  
  constructor(private router: Router) { }

  ngOnInit() {

    console.log('init');
    
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

}
