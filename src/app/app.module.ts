import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListusersComponent } from './listusers/listusers.component';
import { AddcategoryComponent } from './admin-dashboard/addcategory/addcategory.component';
import { ListcategoriesComponent } from './admin-dashboard/listcategories/listcategories.component';
import { AdditemComponent } from './admin-dashboard/additem/additem.component';
import { ListitemsComponent } from './admin-dashboard/listitems/listitems.component';
import { CreateDonationComponent } from './user-dashboard/create-donation/create-donation.component';
import { ListDonationsComponent } from './user-dashboard/list-donations/list-donations.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveSignupComponent,
    LoginComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ListusersComponent,
    AddcategoryComponent,
    ListcategoriesComponent,
    AdditemComponent,
    ListitemsComponent,
    CreateDonationComponent,
    ListDonationsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
