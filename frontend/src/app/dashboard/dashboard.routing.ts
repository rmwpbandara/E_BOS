import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { AddAdvertiesmentComponent } from './advertiesments/add-advertiesment/add-advertiesment.component';
import { ViewAdvertiesmentComponent } from './advertiesments/view-advertiesment/view-advertiesment.component';


export const DashboardRoutes: Routes = [
    
  {
    path: '', 
    component: DashboardComponent,
    // product routes
    children: [
      { path: '', component: ListOrderComponent },
      { path: 'products-add', component: AddProductComponent },
      { path: 'products-view', component: ViewProductComponent },
      { path: 'products-edit', component: EditProductComponent },
      { path: 'profile-settings', component: ProfileSettingsComponent },
      { path: 'advertiesemnts-add', component: AddAdvertiesmentComponent },
      { path: 'advertiesemnts-view', component: ViewAdvertiesmentComponent }
      
    ]
    // please add bellow for another dasgboard routes

  }
];