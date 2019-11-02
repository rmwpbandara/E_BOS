import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: '', class: 'padding-top padding-bottom nav-group-border-bottom' },
  { path: '/dashboard/products-add', title: 'Add Product',  icon:'', class: 'padding-top' },
  { path: '/dashboard/products-edit', title: 'Edit Product',  icon:'', class: '' },
  { path: '/dashboard/products-view', title: 'View Products',  icon:'', class: 'nav-group-border-bottom padding-bottom' },  
  { path: '/dashboard/profile-settings', title: 'Profile Settings',  icon: '', class: 'padding-top padding-bottom nav-group-border-bottom' },
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
