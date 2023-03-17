import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  user:any
  constructor(private dash:DataService,private fb:FormBuilder,private router:Router)
  {
      this.user=dash.currentUser
  }
  ngOnInit():void{
    if(!localStorage.getItem('currentAcno'))
    {
      alert("please login")
      this.router.navigateByUrl("")
    }
  }
  
  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pasw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })
  withdrawlForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pasw1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })
  deposit()
  {
      if(this.depositForm.valid)
      {
        const result=this.dash.deposit(this.depositForm.value.acno,this.depositForm.value.pasw,this.depositForm.value.amnt)
      if(result)
      {
        alert(`your acc has been credited amount with ${this.depositForm.value.amnt} and your available balance has ${result}`)
      }
      else
      {
        alert("incorrect accno or password")
      }
      }
      else
      {
        alert("invalid form")
      }


}
withdrawl()
{
 if(this.withdrawlForm.valid)
 {
  const result=this.dash.withdrawl(this.withdrawlForm.value.acno1,this.withdrawlForm.value.pasw1,this.withdrawlForm.value.amnt1)
  if(result)
  {
    alert(`your acc has been debited amount with ${this.withdrawlForm.value.amnt1} and your available balance has ${result}`)
  }
  else
  {
    alert("incorrect accno or password")
  }
 }
 else
 {
  alert("invalid form")
 }

}
removeUser()
{
  localStorage.removeItem('currentUser')
  localStorage.removeItem('currentAcno')
  this.router.navigateByUrl("")
}

}
