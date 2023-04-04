import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Your Life has changed now"
  data1="Enter Your Account no"

  // acno=""
  // or
  

    
    constructor(private router:Router,private ds:DataService,private fb:FormBuilder)
    {

    }
    loginForm=this.fb.group({
      accno:['',[Validators.required,Validators.pattern('[0-9]+')]],
      pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
    })
    login()
    {
      if(this.loginForm.valid)
      {
        this.ds.login(this.loginForm.value.accno,this.loginForm.value.pass).subscribe((result:any)=>{
          console.log(result);
          localStorage.setItem("currentUser",result.currentUser)
          localStorage.setItem("currentAccountno",JSON.stringify(result.currentAccountno))
          localStorage.setItem("token",JSON.stringify(result.token))
          alert(result.message)
          this.router.navigateByUrl("dashboard")
          
          
        },
        result=>{
          console.log(result.error);
          alert(result.error.message)
        }
        )
      
    }
    else
    {
      alert("invalid form")
    }
  }
    // acnoChange(event:any)
    // {
    //  this.accno= event.target.value
    //  console.log(this.accno);
     
      
    // }pasChange(event:any)
    // {
    //   this.pass= event.target.value;
    //   console.log(this.pass);
      
       
    // }
    
}
