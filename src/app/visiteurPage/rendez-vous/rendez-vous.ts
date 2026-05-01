import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RendezVousCreateDTO } from '../../api';
import { inject } from '@angular/core';
import { RendezVousService } from '../../api';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RendezVousDTO } from '../../api';
import { PublicService } from '../../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendez-vous',
  imports: [ FormsModule, CommonModule],
  templateUrl: './rendez-vous.html',
  styleUrl: './rendez-vous.css',
})
export class RendezVous {
  private rendezVousApi = inject(RendezVousService);
  private route = inject(ActivatedRoute);
  private rout = inject(Router);
  private publicService = inject(PublicService);

  salonId = Number(this.route.snapshot.paramMap.get('id'));

  rendezVousCreateDTO: RendezVousCreateDTO = {
    date: '',
    heure: '',
    description: '',
    nomClient: '',
    emailClient: '',
    telephoneClient: '',
    serviceId: this.salonId
  };

 

  creerRendezVous() {
    this.publicService.prendreUnRendezVous(this.rendezVousCreateDTO).subscribe(
      response => {
        console.log('Rendez-vous créé avec succès', response);
        // Vous pouvez ajouter une redirection ou une notification ici
        this.rout.navigate(['/']); // Redirige vers la page d'accueil après la création du rendez-vous
      },
      error => {
        console.error('Erreur lors de la création du rendez-vous', error);
      }
    );
  }
}
