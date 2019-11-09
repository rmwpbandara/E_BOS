import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManufacturerProfileComponent } from './manufacturer-profile/manufacturer-profile.component';
import { AuthGuard } from './_gurds/auth.guard';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderReceiptComponent } from './order-receipt/order-receipt.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'manufacturer-profile', component: ManufacturerProfileComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'order-receipt', component: OrderReceiptComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
