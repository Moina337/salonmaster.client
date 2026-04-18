import { Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';
import { Navbar } from './layouts/navbar/navbar';
import { SalonDetailComponent } from './visiteurPage/salon-detail/salon-detail';
import { ListeSalon } from './visiteurPage/liste-salon/liste-salon';
import { Dashboard } from './MonSalon/dashboard/dashboard';
import { Sidebar } from './layouts/sidebar/sidebar';
import { AjouterSalon } from './visiteurPage/ajouter-salon/ajouter-salon';
import { Connexion } from './visiteurPage/connexion/connexion';

export const routes: Routes = [
    {
        path: 'mon-salon',
        component: Sidebar,
        children: [
            {
                path: '',
                component: Dashboard
            },
            {
                path: 'dashboard',
                component: Dashboard
            },
             
        ]
    },
    {
        path: '',
        component: Navbar,
        children: [
            {
                path: '',
                component: ListeSalon
            },
            {
                path: 'salon/:id',
                component: SalonDetailComponent
            }

        ]
     },
     {
        path: 'ajouter-salon',
        component: AjouterSalon
        },
        {
            path: 'connexion',
            component: Connexion
        }
     

];
