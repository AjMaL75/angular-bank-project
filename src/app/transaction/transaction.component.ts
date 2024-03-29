import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent  {
  transactionData:any
  constructor(private ds:DataService)
  {
    
    
    this.ds.getTransaction(JSON.parse(localStorage.getItem('currentAccountno')||"")).subscribe((result:any)=>{
      this.transactionData=result.transactions
    }
    // result=>{
    //   alert(result.error.message)
    // }
    )
    
    
  }
  

}
