import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


//create global header for header overloading

const option={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentUser:any
  currentAccountno:any
  userDetails:any={}

  constructor(private apreq:HttpClient) {
    // this.getDetails()
   }
 
  // saveDetails()
  // {
  //   if(this.userDetails)
  //   {
  //     localStorage.setItem('userDetails',JSON.stringify(this.userDetails))
  //   }
  //   if(this.currentUser)
  //   {
  //     localStorage.setItem('currentUser',this.currentUser)
  //   }
  //   if(this.currentAccountno)
  //   {
  //     localStorage.setItem('currentAcno',this.currentAccountno)
  //   }
  // }
  // getDetails()
  // {
  //   if(localStorage.getItem('userDetails'))
  //   {
  //     this.userDetails=JSON.parse(localStorage.getItem('userDetails') ||" ")
  //   }
  //   if(localStorage.getItem('this.currentUser'))
  //   {
  //     this.currentUser=localStorage.getItem('currentUser')
  //   }
  //   if(localStorage.getItem('currentAcno'))
  //   {
  //     this.currentAccountno=JSON.parse(localStorage.getItem('currentAcno')|| " ")
  //   }

  // }
  register(accno:any,uname:any,pass:any)
  {
      // request body part
      const registerdata={accno,uname,pass}
     return  this.apreq.post("http://localhost:3001/register",registerdata)
  }
  login(accno:any,pass:any)
  {
    const logindata={accno,pass}
     return this.apreq.post("http://localhost:3001/login",logindata)

      
  }
  getToken=()=>{
    //access token 
    const token=JSON.parse(localStorage.getItem("token")||"")
    //generate header 
    let headers=new HttpHeaders()
    if(token)
    {
      //append the token into header object
     option.headers=headers.append('access_data',token)
    }
    return option
  }
  deposit(accno:any,passw:any,amount:any)
  {
    
    const data={accno,passw,amount}
     return this.apreq.post("http://localhost:3001/deposit",data,this.getToken())

  }
  withdrawl(accno:any,pass:any,amount:any)
  {
    const data={accno,pass,amount}
     return this.apreq.post("http://localhost:3001/withdrawl",data,this.getToken())

    
        
  }     
    getTransaction(accno:any)
    {
      
      const data={accno}
     return this.apreq.post("http://localhost:3001/transaction",data,this.getToken())

      
      return this.userDetails[accno].transaction
      
      
    }
    deleteAcc(event:any)
    {
        return this.apreq.delete('http://localhost:3001/delete/'+event,this.getToken())
    }
   
  }
 



