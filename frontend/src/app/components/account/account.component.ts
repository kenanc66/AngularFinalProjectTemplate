import { Component, OnInit } from '@angular/core';
import { AccountItem } from 'src/app/models/accountItem';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account:AccountItem=new AccountItem()
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccount().subscribe(response=>{
      this.account=response
      
    })
    
  }
 
}
