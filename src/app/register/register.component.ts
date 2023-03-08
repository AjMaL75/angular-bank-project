import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
         constructor(private ds:DataService){

  }

  accne:any
  uname3:any
  passne:any
  register()
  {
    var acc=this.accne
    var uname=this.uname3
    var pass=this.passne
    const result=this.ds.register(acc,uname,pass)
    if(result)
    {
      alert("registered")
    }
    else
    {
      alert("already registed")
    }

  }

}
