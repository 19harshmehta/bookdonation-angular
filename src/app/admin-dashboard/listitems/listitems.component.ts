import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent 
{
  apiResponce:any={}
  items:Array<any>=[]

  constructor(private adminService:AdminService, private toastr:ToastrService, private router:Router){
    this.getAllItems()
  }
  getAllItems()
  {
    console.log("List Categories Api Called");

      this.adminService.getAllItems().subscribe(resp=>{
        this.apiResponce = resp 
      
        this.items=this.apiResponce.data 
      },err=>{
  
      }) 
  }

}
