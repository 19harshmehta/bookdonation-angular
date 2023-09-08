import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent 
{

      apiResponce:any={}
      users:Array<any>=[]
  

  constructor(private userService:UserService, private toastr:ToastrService, private router:Router){
      this.getAllUsers()
  }
  getAllUsers()
  {
    console.log("List User Api Called");

    this.userService.getAllUsers().subscribe(resp=>{
      this.apiResponce = resp 
    
      this.users=this.apiResponce.data 
    },err=>{

    })
    
  }
}
