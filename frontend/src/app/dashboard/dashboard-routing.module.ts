import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';


export const DashboardRoutes: Routes = [
    
  { path: '', component: DashboardComponent },

  // product routes 
  { path: 'products-add', component: AddProductComponent },
  { path: 'products-view', component: ViewProductComponent },
  { path: 'products-edit', component: EditProductComponent }

  //please add bellow for another dasgboard routes

];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
