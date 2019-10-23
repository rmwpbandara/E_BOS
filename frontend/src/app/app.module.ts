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
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import {MatInputModule, MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GuestHeaderComponent,
    UserViewComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: UserViewComponent }
    ]),
    // BrowserAnimationsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatAutocompleteModule,
    // MatCheckboxModule,
    // MatDatepickerModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSliderModule,
    // MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
