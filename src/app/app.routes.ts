import { Routes } from '@angular/router';
import { UserTablesComponent } from './login/user-tables/user-tables.component';

export const routes: Routes = [
    {
        path: 'tables',
        component: UserTablesComponent,
        title: 'Table Plan',
    }
];
