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
import { SearchResultComponent } from './search-result/search-result.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { HttpModule } from '@angular/http';
import { ManufacturerProfileComponent } from './manufacturer-profile/manufacturer-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GuestHeaderComponent,
    UserViewComponent,
    SearchResultComponent,
    ManufacturerProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: UserViewComponent }
    ]),
    SharedModuleModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
