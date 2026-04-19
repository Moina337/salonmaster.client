import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService, SalonInscriptionDTO } from '../../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-salon',
  standalone: true, // Dangay soxla standalone: true su fekké danga imports FormsModule
  imports: [FormsModule],
  templateUrl: './ajouter-salon.html',
  styleUrl: './ajouter-salon.css',
})
export class AjouterSalon {
  private authService = inject(AuthService);
  private router = inject(Router);

  salonData: SalonInscriptionDTO = {
    nomSalon: '',
    categorie: undefined,
    email: '',
    motDePasse: ''
  };

  confirmerMotDePasse: string = '';

  ajouterSalon() {
    
    if (this.salonData.motDePasse !== this.confirmerMotDePasse) {
      console.error('Mot de passe et confirmation ne correspondent pas.');
      return;
    }

    this.authService.creationSalon(this.salonData).subscribe({
      next: (response) => {
        console.log('Salon créé avec succès :', response);
        this.router.navigate(['/connexion']);
      },
      error: (error) => {
        console.error('Erreur lors de la création :', error);
      }
    });
  }
}
