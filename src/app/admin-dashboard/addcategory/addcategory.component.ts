import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent 
{
  myform: FormGroup
  data:any ={}

  constructor(private toastr:ToastrService,private httpClient:HttpClient , private router:Router){
    this.myform = new FormGroup({
      categoryName : new FormControl("",[Validators.required]) 
    })
  }

  addCategory()
  {
    let data = 
    {
      "categoryName":this.myform.value.categoryName,
      
    }

    this.httpClient.post("https://bookdonationapi-dkhq.onrender.com/addcategory",data).subscribe(resp=>{
      this.data = resp
      if(this.data.rcode== -9){
        this.toastr.error(this.data.msg,"",{timeOut:3000})
      }else if(this.data.rcode == 200){
        this.toastr.success(this.data.msg,"",{timeOut:3000})
        // console.log(this.data.data.role);
        
      }
      },err=>{
  
      })
  }

  
}

