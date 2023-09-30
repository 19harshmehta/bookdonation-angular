import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent 
{
  myform: FormGroup;
  data:any ={}  
  constructor(private toastr:ToastrService,private httpClient:HttpClient , private router:Router){
    this.myform = new FormGroup({
      itemName : new FormControl("",[Validators.required]) ,
      categoryId : new FormControl("",[Validators.required])
    })

    this.listCategryName();
  }

  apiResponce:any={}
  categories:Array<any>=[]
  listCategryName()
  {
    this.httpClient.get("https://bookdonationapi-dkhq.onrender.com/getallcategory").subscribe(resp=>{
      this.apiResponce = resp 
    
      this.categories=this.apiResponce.data 
    },err=>{

    }) 
  }


  addItem()
  {
     let data ={
      "itemName":this.myform.value.itemName,
      "activeInd":0,
      "categoryName":this.myform.value.categoryId
     }

     this.httpClient.post("https://bookdonationapi-dkhq.onrender.com/additem",data).subscribe(resp=>{
       this.data = resp
       if(this.data.rcode == -9){
        this.toastr.error(this.data.msg,"",{timeOut:3000})
       }else if(this.data.rcode == 200)
       {
        this.toastr.success(this.data.msg,"",{timeOut:3000}) 
        this.router.navigateByUrl("/listitems")

       }
     },err=>{

     })
  }
}
