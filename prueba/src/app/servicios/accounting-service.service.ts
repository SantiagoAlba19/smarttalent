import { Component, NgModule, Injectable, Inject, forwardRef } from '@angular/core';


// Do not modify the service as validation tests will not pass
@Injectable({ providedIn: 'root' })
export class AccountingService{
  private accountsWithBalance: Map<string, any> = new Map();

  public async createAccount(accountID: string): Promise<void> {
    if (this.accountsWithBalance.has(accountID)){
      throw Error("ACCOUNT_EXISTS");
    }
    this.accountsWithBalance.set(accountID, 0);
  }

  public async topUp(accountID: string, amount: number): Promise<number>{
    if (!this.accountsWithBalance.has(accountID)){
      throw Error("ACCOUNT_DOES_NOT_EXIST");
    }
    this.accountsWithBalance.set(accountID, this.accountsWithBalance.get(accountID) + amount);
    return this.accountsWithBalance.get(accountID);
  } 
}

// Implement the component here
@Component({
  selector:'',
  template: `
  `,
})
export class AccountComponent {
  constructor(){
  }

}

// #region Preview
@Component({
    template: `<account-component></account-component>`
})
export class PreviewComponent { }
// #endregion Preview

// #region Module declaration - Do not Change