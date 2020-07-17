import {
  MenuRootItem,

} from 'ontimize-web-ngx';

import { AccountsCardComponent } from './accounts-card/accounts-card.component';
import { BranchesCardComponent } from './branches-card/branches-card.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { EmployeesCardComponent } from './employees-card/employees-card.component';
export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  
  {id: 'views', name: 'VIEWS', icon: 'menu', opened: true,
  items: [
     {
        id: 'customers',
        name: 'CUSTOMERS',
        tooltip: 'CUSTOMERS_CONTENT',
        route: '/main/customers',
        icon: 'people',
        image: 'assets/images/ic_clientes.png'
      },
      {
        id: 'accounts',
        name: 'ACCOUNTS',
        tooltip: 'ACCOUNTS_CONTENT',
        route: '/main/accounts',
        icon: 'credit_card',
        image: 'assets/images/ic_cuentas.png'
      },
      {
        id: 'branches',
        name: 'BRANCHES',
        tooltip: 'BRANCHES_CONTENT',
        route: '/main/branches',
        icon: 'account_balance',
        image: 'assets/images/ic_sucursales.png'
      },
      {
        id: 'employees',
        name: 'EMPLOYEES',
        tooltip: 'EMPLOYEES_CONTENT',
        route: '/main/employees',
        icon: 'person',
        image: 'assets/images/ic_empleados.png'
      
    
  }]},
  {
    id: 'settings', name: 'SETTINGS', icon: 'toggle_on'
  },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
export const MENU_COMPONENTS = [
  AccountsCardComponent,
  CustomersCardComponent,
  BranchesCardComponent,
  EmployeesCardComponent
];