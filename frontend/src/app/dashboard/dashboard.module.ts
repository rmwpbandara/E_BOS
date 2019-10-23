import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutes } from './dashboard.routing';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    AddProductComponent, 
    ViewProductComponent, 
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
  ]
})
export class DashboardModule { }
