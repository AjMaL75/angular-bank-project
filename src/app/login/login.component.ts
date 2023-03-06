import { Component } from '@angular/core';

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

    userDetails:any={
      1000:{username:"anu",accno:1000,password:"abc123",balance:0},
      1001:{username:"arif",accno:1001,password:"abc123",balance:0},
      1002:{username:"anoop",accno:1002,password:"abc123",balance:0},
      1003:{username:"sanu",accno:1003,password:"abc123",balance:0},
      1004:{username:"sujith",accno:1004,password:"abc123",balance:0}
      
    }
    login()
    {
      if(this.accno in this.userDetails )
      {
        if(this.pass==this.userDetails[this.accno]['password'])
        {
          alert("You are successfullu logged")
        }
        else{
          alert("please enter correct passwoerd")
        }
      }
      else{
        alert("incorrect accno")
      }
    }
    acnoChange(event:any)
    {
     this.accno= event.target.value
     console.log(this.accno);
     
      
    }pasChange(event:any)
    {
      this.pass= event.target.value;
      console.log(this.pass);
      
       
    }
}
