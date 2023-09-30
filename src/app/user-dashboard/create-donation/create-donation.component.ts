import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.component.html',
  styleUrls: ['./create-donation.component.css']
})
export class CreateDonationComponent 
{
  myForm: FormGroup;
  data:any ={}  
  constructor(private toastr:ToastrService,private httpClient:HttpClient , private router:Router){
    this.myForm = new FormGroup({
      title : new FormControl("",[Validators.required]) ,
      keywords : new FormControl("",[Validators.required]),
      description : new FormControl("",[Validators.required]),
      itemName : new FormControl("",[Validators.required]), 
      donationDate : new FormControl("",[Validators.required]) 
    })
    this.listItemName()
  }
  apiResponce:any={}
  items:Array<any>=[]
  listItemName()
  {
    this.httpClient.get("https://bookdonationapi-dkhq.onrender.com/getallitems").subscribe(resp=>{
      this.apiResponce = resp 
    
      this.items=this.apiResponce.data 
    },err=>{

    }) 
  }

  saveDonation()
  {
    let data =
    {
      "userId": "1",
      "donationDate":this.myForm.value.donationDate,
      "assignInd": 1,
      "statusInd": 1,
      "title": this.myForm.value.title,
      "keywords": this.myForm.value.keywords,
      "description": this.myForm.value.description,
      "itemName":this.myForm.value.itemName 
     }

     this.httpClient.post("https://bookdonationapi-dkhq.onrender.com/createdonation",data).subscribe(resp=>{
       this.data = resp
       if(this.data.rcode == -9){
        this.toastr.error(this.data.msg,"",{timeOut:3000})
       }else if(this.data.rcode == 200)
       {
        this.toastr.success(this.data.msg,"",{timeOut:3000}) 
        // this.router.navigateByUrl("/listitems")

       }
     },err=>{

     })



  }
}
