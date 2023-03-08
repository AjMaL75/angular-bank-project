import { Component } from '@angular/core';
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
  accno:any
  pass:any

    
    constructor(private router:Router,private ds:DataService)
    {

    }
    login()
    {
      const result=this.ds.login(this.accno,this.pass)
      if(this.accno>=0){
      if(result)
      {
        alert("You are successfully logged")
        this.router.navigateByUrl("dashboard")
      }

      else{
        alert("incorrect password")
      }
      }
      else{
        alert("Don't be account field as empty")
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
