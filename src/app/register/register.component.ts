import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
         constructor(private ds:DataService,private fb:FormBuilder,private router:Router){

  }
  //model for register form
  registerForm=this.fb.group(
    {
      accno:['',[Validators.required,Validators.pattern('[0-9]+')]],
      pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
      username:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]]
    }
  )

  
  register()
  {
    var acc1=this.registerForm.value.accno
    var uname1=this.registerForm.value.username
    var pass1=this.registerForm.value.pass
   if(this.registerForm.valid)
   {
    const result=this.ds.register(acc1,uname1,pass1)
    if(result)
    {
      alert("registered")
      this.router.navigateByUrl("")
    }
    else
    {
      alert("already registed")
    }
   }
   else
   {
    alert("invalid form")
   }

  }

}
