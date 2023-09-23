import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.css']
})
export class ReactiveSignupComponent {
    
    data:any
    myForm : FormGroup
    

    constructor(private toastr: ToastrService,private router:Router, private httpClient:HttpClient){
     
      this.myForm = new FormGroup({
        firstName : new FormControl("",Validators.required),
        lastName : new FormControl("",Validators.required),
        email : new FormControl("",[Validators.required,Validators.email]),
        password : new FormControl("",[Validators.required,Validators.minLength(8)]),
        phoneNumber : new FormControl("",[Validators.required,Validators.minLength(10)]),
        address : new FormControl("",Validators.required),
        pincode : new FormControl("",Validators.required),
        profileurl : new FormControl("",Validators.required),
        state : new FormControl("",Validators.required),
        city : new FormControl("",Validators.required),
        

      })
    }

    saveUser()
    {

      console.log(this.myForm.value)
      var data = {
        
        
        "firstName":this.myForm.value.firstName,
        "lastName": this.myForm.value.lastName,
        "email": this.myForm.value.email,
        "password": this.myForm.value.password,
        "contactNum": this.myForm.value.phoneNumber,
        "address": this.myForm.value.address,
        "state": this.myForm.value.state,
        "city": this.myForm.value.city,
        "pincode": this.myForm.value.pincode,
        "activeInd": "0",
        "createdAt": " fghdgh",
        "profileUrl": "hdthf ",
        "role": "user",
      }
        this.httpClient.post("https://bookdonationapi-dkhq.onrender.com/signup",data).subscribe(resp=>{
        this.data = resp
        if(this.data.rcode== -9){
          this.toastr.error(this.data.msg,"",{timeOut:3000})
        }else if(this.data.rcode == 200){
          this.toastr.success("Signup done","",{timeOut:3000})
          this.router.navigateByUrl("/login")
        }
        },err=>{
    
        })

    }

}
