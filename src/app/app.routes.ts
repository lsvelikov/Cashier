import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserTablesComponent } from './login/user-tables/user-tables.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        title: 'LogIn',
    },
    {
        path: 'tables',
        component: UserTablesComponent,
        title: 'Table Plan',
    }
];
