import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  userDetails:any={
    1000:{username:"anu",accno:1000,password:"abc123",balance:0},
    1001:{username:"arif",accno:1001,password:"abc123",balance:0},
    1002:{username:"anoop",accno:1002,password:"abc123",balance:0},
    1003:{username:"sanu",accno:1003,password:"abc123",balance:0},
    1004:{username:"sujith",accno:1004,password:"abc123",balance:0}
    
  }
  register(accno:any,uname:any,pass:any)
  {
      if(accno in this.userDetails)
      {
        return false
      }
      else
      {
        this.userDetails[accno]={username:uname,accno,password:pass,balance:0}
        console.log(this.userDetails);
        return true
        
        
      }
  }
  login(accno:any,pass:any)
  {
    if(accno in this.userDetails )
      {
        if(pass==this.userDetails[accno]['password'])
        {
          return true
        }
        else{
            return false
        }
      }
      return false
      

      
  }
}
