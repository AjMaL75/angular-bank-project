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
  useracc:any
  date:any

  constructor(private dash:DataService,private fb:FormBuilder,private router:Router)
  {
      this.user=dash.currentUser
      this.date=new Date()
  }
  ngOnInit():void{
    if(!localStorage.getItem('currentAccountno'))
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
        this.dash.deposit(this.depositForm.value.acno,this.depositForm.value.pasw,this.depositForm.value.amnt).subscribe((result:any)=>{

          alert(result.message)
        },
        result=>{
          alert(result.error.message)
          this.router.navigateByUrl("dashboard")
        })
      
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
  this.dash.withdrawl(this.withdrawlForm.value.acno1,this.withdrawlForm.value.pasw1,this.withdrawlForm.value.amnt1).subscribe((result:any)=>{
    alert(result.message)
  },
  result=>{
    alert(result.error.message)
  })
 }
 else
 {
  alert("invalid form")
 }

}
removeUser()
{
  localStorage.removeItem('currentUser')
  localStorage.removeItem('currentAccountno')
  this.router.navigateByUrl("")
}
deleteAcc()
{
  this.useracc=JSON.parse(localStorage.getItem('currentAccountno') ||"")
}
removeAccno()
{
  this.useracc=""
}
deleteAllAcc(event:any)
{
    this.dash.deleteAcc(event).subscribe((result:any)=>{
    
        alert(result.message)
        this.removeUser()
        this.router.navigateByUrl("")
      },
    result=>
      {
        alert(result.message)
      }
    )
}
}
