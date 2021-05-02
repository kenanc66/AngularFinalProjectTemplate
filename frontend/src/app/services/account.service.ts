import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountItem } from '../models/accountItem';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiUrl = 'https://localhost:44396/api/auth/account';

  constructor(private httpClient:HttpClient) { 

  }

  getAccount(){
    
    return this.httpClient.get<AccountItem>(this.apiUrl)
  }
}
