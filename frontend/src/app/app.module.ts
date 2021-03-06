import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import bootstrap from "bootstrap";
import { GuestHeaderComponent } from './component/guest-header/guest-header.component';
import { UserViewComponent } from './user-view/user-view.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { HttpModule } from '@angular/http';
import { ManufacturerProfileComponent } from './manufacturer-profile/manufacturer-profile.component';
import { AuthGuard } from './_gurds/auth.guard';
import { UserService } from './_service/custom/user.service';
import { CommonService } from './_service/common.service';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderReceiptComponent } from './order-receipt/order-receipt.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GuestHeaderComponent,
    UserViewComponent,
    ManufacturerProfileComponent,
    CartPageComponent,
    OrderReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: UserViewComponent }
    ]),
    SharedModuleModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [CommonService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
