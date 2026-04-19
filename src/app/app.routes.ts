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
import { AjouterService } from './MonSalon/ajouter-service/ajouter-service';
import { Service } from './visiteurPage/service/service';
import { AjouterHoraire } from './MonSalon/ajouter-horaire/ajouter-horaire';
import { ModifInfoSalon } from './MonSalon/modif-info-salon/modif-info-salon';
import { ModifService } from './MonSalon/modif-service/modif-service';

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
            {
                path: 'ajouter-service',
                component: AjouterService
            },
            {
                path: 'ajouter-horaire',
                component: AjouterHoraire
            },
            {
                path: 'modif-info-salon',
                component: ModifInfoSalon
            },
            {
                path: 'modif-service/:id',
                component: ModifService
            }

             
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
            },
            {
                path: 'service/:id',
                component: Service
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
