import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  myForm : FormGroup
  data:any ={}

  constructor(private toastr:ToastrService,private httpClient:HttpClient , private router:Router){
    this.myForm = new FormGroup({
      
      email : new FormControl("",[Validators.required,Validators.email]),
      password : new FormControl("",[Validators.required]),
      
      

    })
  }

  login()
    {
      console.log("Email => ",this.myForm.value.email);
      console.log("Password => ",this.myForm.value.password);
      let data = {
        "email":this.myForm.value.email,
        "password":this.myForm.value.password
      }

      this.httpClient.post("https://bookdonationapi-dkhq.onrender.com/login",data).subscribe(resp=>{
      this.data = resp
      if(this.data.rcode== -9){
        this.toastr.error(this.data.msg,"",{timeOut:3000})
      }else if(this.data.rcode == 200){
        this.toastr.success("Login done","",{timeOut:3000})
        // console.log(this.data.data.role);
        
        if(this.data.data.role == "user")
        {
          this.router.navigateByUrl("/userdashboard")
        }else{
          this.router.navigateByUrl("/admindashboard")

        }
      }
      },err=>{
  
      })
      

    }


}
