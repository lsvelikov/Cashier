import { Routes } from '@angular/router';
import { UserTablesComponent } from './login/user-tables/user-tables.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        title: 'LogIn,'
    },
    {
        path: 'tables',
        component: UserTablesComponent,
        title: 'Table Plan',
    }
];
