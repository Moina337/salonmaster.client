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
import { authGuard } from './auth-guard';
import { guestGuard } from './guest.guard';
import { RendezVous } from './visiteurPage/rendez-vous/rendez-vous';
import { ListeRdv } from './MonSalon/liste-rdv/liste-rdv';
import { RdvDetail } from './MonSalon/rdv-detail/rdv-detail';

export const routes: Routes = [
    {
        path: 'mon-salon',
        component: Sidebar,
        canActivate: [authGuard],
        canActivateChild: [authGuard],
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
            },
            {
                path: 'liste-rdv',
                component: ListeRdv
            },
                {
                    path: 'rendez-vous/:id',
                    component: RdvDetail
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
            },
                {
                    path: 'rendez-vous/:id',
                    component: RendezVous
                }  

        ]
     },
     {
        path: 'ajouter-salon',
        component: AjouterSalon,
        canActivate: [guestGuard]
        },
        {
            path: 'connexion',
            component: Connexion,
            canActivate: [guestGuard]
        }
     

];
