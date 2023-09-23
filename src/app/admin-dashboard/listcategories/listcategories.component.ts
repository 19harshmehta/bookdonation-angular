import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent 
{
      apiResponce:any={}
      category:Array<any>=[]

      constructor(private adminService:AdminService, private toastr:ToastrService, private router:Router){
        this.getAllCategories()
    }
    getAllCategories()
    {
      console.log("List Categories Api Called");

      this.adminService.getAllCategories().subscribe(resp=>{
        this.apiResponce = resp 
      
        this.category=this.apiResponce.data 
      },err=>{
  
      }) 
    }
}
