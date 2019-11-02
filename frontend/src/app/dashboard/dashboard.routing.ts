import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';


export const DashboardRoutes: Routes = [
    
  {
    path: '', 
    component: DashboardComponent,
    // product routes
    children: [
      { path: 'products-add', component: AddProductComponent },
      { path: 'products-view', component: ViewProductComponent },
      { path: 'products-edit', component: EditProductComponent },
      { path: 'profile-settings', component: ProfileSettingsComponent }
    ]
    // please add bellow for another dasgboard routes

  }
];