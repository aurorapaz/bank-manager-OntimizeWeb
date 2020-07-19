import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  {id: 'views', name: 'VIEWS', icon: 'menu', opened: true,
  items: [
     {
        id: 'customers',
        name: 'CUSTOMERS',
        tooltip: 'BANK'+"'"+'S CUSTOMERS',
        route: '/main/customers',
        icon: 'people'//,image: 'assets/images/accounts.png'
      },
      {
        id: 'accounts',
        name: 'ACCOUNTS',
        tooltip: 'BANK'+"'"+'S ACCOUNTS',
        route: '/main/accounts',
        icon: 'credit_card' //,image: 'assets/images/accounts.png'
      },
      {
        id: 'branches',
        name: 'BRANCHES',
        tooltip: 'BANK'+"'"+'S BRANCHES',
        route: '/main/branches',
        icon: 'account_balance'
        //,image: 'assets/images/accounts.png'
      },
      {
        id: 'employees',
        name: 'EMPLOYEES',
        tooltip:'BANK'+"'"+'S EMPLOYEES',
        route: '/main/employees',
        icon: 'engineering'
        //,image: 'assets/images/accounts.png'
      
    
  }]},
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
