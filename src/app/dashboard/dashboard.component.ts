import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user:any
  constructor(private dash:DataService)
  {
      this.user=dash.currentUser
  }
  acno:any
  pasw:any
  amnt:any
  acno1:any
  pasw1:any
  amnt1:any
  deposit()
  {
      const result=this.dash.deposit(this.acno,this.pasw,this.amnt)
      if(result)
      {
        alert(`your acc has been credited amount with ${this.amnt} and your available balance has ${result}`)
      }
      else
      {
        alert("incorrect accno or password")
      }


}
withdrawl()
{
  const result=this.dash.withdrawl(this.acno1,this.pasw1,this.amnt1)
      if(result)
      {
        alert(`your acc has been debited amount with ${this.amnt1} and your available balance has ${result}`)
      }
      else
      {
        alert("incorrect accno or password")
      }

}

}
