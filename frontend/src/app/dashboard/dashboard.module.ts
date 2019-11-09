import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutes } from './dashboard.routing';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ListOrderComponent } from './list-order/list-order.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddProductComponent, 
    ViewProductComponent, 
    EditProductComponent, ProfileSettingsComponent, ListOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    SharedModuleModule,
  ]
})
export class DashboardModule { }
