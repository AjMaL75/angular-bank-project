import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAccountno:any
  userDetails:any

  constructor() {
    this.getDetails()
   }
  // userDetails:any={
  //   1000:{username:"anu",accno:1000,password:"abc123",balance:0,transaction:[]},
  //   1001:{username:"arif",accno:1001,password:"abc123",balance:0,transaction:[]},
  //   1002:{username:"anoop",accno:1002,password:"abc123",balance:0,transaction:[],},
  //   1003:{username:"sanu",accno:1003,password:"abc123",balance:0,transaction:[]},
  //   1004:{username:"sujith",accno:1004,password:"abc123",balance:0,transaction:[]}
    
  // }
  saveDetails()
  {
    if(this.userDetails)
    {
      localStorage.setItem('userDetails',JSON.stringify(this.userDetails))
    }
    if(this.currentUser)
    {
      localStorage.setItem('currentUser',this.currentUser)
    }
    if(this.currentAccountno)
    {
      localStorage.setItem('currentAcno',this.currentAccountno)
    }
  }
  getDetails()
  {
    if(localStorage.getItem('userDetails'))
    {
      this.userDetails=JSON.parse(localStorage.getItem('userDetails') ||" ")
    }
    if(localStorage.getItem('this.currentUser'))
    {
      this.currentUser=localStorage.getItem('currentUser')
    }
    if(localStorage.getItem('currentAcno'))
    {
      this.currentAccountno=JSON.parse(localStorage.getItem('currentAcno')|| " ")
    }

  }
  register(accno:any,uname:any,pass:any)
  {
      if(accno in this.userDetails)
      {
        return false
      }
      else
      {
        this.userDetails[accno]={username:uname,accno,password:pass,balance:0,transaction:[]}
        console.log(this.userDetails);
        this.saveDetails()
        return true
        
        
      }
  }
  login(accno:any,pass:any)
  {
    if(accno in this.userDetails )
      {
        if(pass==this.userDetails[accno]['password'])
        {
          this.currentUser=this.userDetails[accno]["username"]
          this.currentAccountno=accno
          this.saveDetails()

          return true
        }
        else{
            return false
        }
      }
      return false
      

      
  }
  deposit(accno:any,passw:any,amont:any)
  
  {
    var amnt=parseInt(amont)
    if(accno in this.userDetails)
    {
          if(passw==this.userDetails[accno]['password'])
          {
            this.userDetails[accno]['balance']+=amnt
            //add transaction deposit data
            this.userDetails[accno]['transaction'].push({
              type:"Credit",
              amount:amnt
            })

            this.saveDetails()
            return this.userDetails[accno]['balance']
          }
          else{
            return false
          }
    }
    else
    {
      return false
    }
  }
  withdrawl(accno:any,pass:any,amont:any)
  {
    var amnt=parseInt(amont)
    
        if(accno in this.userDetails)
        {
            if(pass==this.userDetails[accno]['password'])
            {
              if(amnt<=this.userDetails[accno]['balance']){
              this.userDetails[accno]['balance']-=amnt
              //add transaction withdraw data
            this.userDetails[accno]['transaction'].push({
              type:"Debit",
              amount:amnt
            })
            // console.log(this.userDetails);
            this.saveDetails()


              return this.userDetails[accno]['balance']
              }
              else
              {
                 alert('insufficient balance')
              }
            }
            else
            {
              return false
            }
        }
        else{
          return false
        }
    }
    getTransaction(accno:any)
    {
      
      
      
      return this.userDetails[accno].transaction
      
      
    }
   
  }
 



