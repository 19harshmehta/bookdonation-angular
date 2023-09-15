import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListusersComponent } from './listusers/listusers.component';
import { AddcategoryComponent } from './admin-dashboard/addcategory/addcategory.component';
import { ListcategoriesComponent } from './admin-dashboard/listcategories/listcategories.component';

const routes: Routes = [
  {path:"signup",component:ReactiveSignupComponent},
  {path:"",component:ReactiveSignupComponent},
  {path:"login",component:LoginComponent},
  {path:"userdashboard",component:UserDashboardComponent},
  {path:"admindashboard",component:AdminDashboardComponent},
  {path:"listusers",component:ListusersComponent},
  {path:"addcategory",component:AddcategoryComponent},
  {path:"listcategories",component:ListcategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
