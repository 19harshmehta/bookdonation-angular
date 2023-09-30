import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-list-donations',
  templateUrl: './list-donations.component.html',
  styleUrls: ['./list-donations.component.css']
})
export class ListDonationsComponent 
{

  apiResponce:any={}
  donations:Array<any>=[]


    constructor(private userService:UserService, private toastr:ToastrService, private router:Router)
    {
      this.getAllDonation()
    }

getAllDonation()
{
  console.log("List donation Api Called");

  this.userService.getAllDonation().subscribe(resp=>{
  this.apiResponce = resp 

  this.donations=this.apiResponce.data 
  },err=>{

  })

  }
}

