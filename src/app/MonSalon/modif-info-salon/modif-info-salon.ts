import { Component, inject, effect, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SalonService, SalonUpdateProfilDTO } from '../../api';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-modif-info-salon',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modif-info-salon.html',
  styleUrl: './modif-info-salon.css',
})
export class ModifInfoSalon {
  private salonService = inject(SalonService);
   
  private router = inject(Router);

  // Récupération des données actuelles
  salon = toSignal(this.salonService.afficherMonSalon(), { initialValue: null });

  salonData: SalonUpdateProfilDTO = {
    nom: '',
    description: '',
    adresse: '',
    latitude: 0,
    longitude: 0
  };

  constructor() {
    // L'effet surveille le signal 'salon' et remplit le formulaire quand les données arrivent
    effect(() => {
      const data = this.salon();
      if (data) {
        this.salonData = {
          nom: data.nom || '',
          description: data.description || '',
          adresse: data.adresse || '',
          latitude: data.latitude || 0,
          longitude: data.longitude || 0
        };
      }
    });
  }

  mettreAJour() {
    this.salonService.modifInforSalon(this.salonData).subscribe({

      next: (res) => {
alert('Profil mis à jour avec succès !');
 // Redirection au dashboard 
  this.router.navigate(['/mon-salon/dashboard']);
      } ,
     

      error: (err) => console.error('Erreur lors de la mise à jour', err)
    });
  }
}
