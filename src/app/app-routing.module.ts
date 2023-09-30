import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListusersComponent } from './listusers/listusers.component';
import { AddcategoryComponent } from './admin-dashboard/addcategory/addcategory.component';
import { ListcategoriesComponent } from './admin-dashboard/listcategories/listcategories.component';
import { AdditemComponent } from './admin-dashboard/additem/additem.component';
import { ListitemsComponent } from './admin-dashboard/listitems/listitems.component';
import { CreateDonationComponent } from './user-dashboard/create-donation/create-donation.component';



const routes: Routes = [
  {path:"signup",component:ReactiveSignupComponent},
  {path:"",component:ReactiveSignupComponent},
  {path:"login",component:LoginComponent},
  {path:"userdashboard",component:UserDashboardComponent},
  {path:"admindashboard",component:AdminDashboardComponent},
  {path:"listusers",component:ListusersComponent},
  {path:"addcategory",component:AddcategoryComponent},
  {path:"listcategories",component:ListcategoriesComponent},
  {path:"additem",component:AdditemComponent},
  {path:"listitems",component:ListitemsComponent},
  {path:"createdonation",component:CreateDonationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
