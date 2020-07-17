import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomersModule } from '../customers/customers.module';
import { EmployeesModule } from '../employees/employees.module';
import { BranchesModule } from '../branches/branches.module';
import { AccountsModule } from '../accounts/accounts.module';
import { SettingsModule } from '../settings/settings.module'; 
import { MatDialog } from '@angular/material';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    protected dialog: MatDialog,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  public openDetailCustomers(data: any): void {
    this.dialog.open(CustomersModule, {
      height: '330px',
      width: '520px',
      data: data
    });
  }
  public openDetailEmployees(data: any): void {
    this.dialog.open(EmployeesModule, {
      height: '330px',
      width: '520px',
      data: data
    });
  }
  public openDetailBranches(data: any): void {
    this.dialog.open(BranchesModule, {
      height: '330px',
      width: '520px',
      data: data
    });
  }
  public openDetailAccounts(data: any): void {
    this.dialog.open(AccountsModule, {
      height: '330px',
      width: '520px',
      data: data
    });
  }
  public openDetailSettings(data: any): void {
    this.dialog.open(SettingsModule, {
      height: '330px',
      width: '520px',
      data: data
    });
  }

}
