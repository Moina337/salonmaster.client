import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../api';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SalonInscriptionDTO } from '../../api';

@Component({
  selector: 'app-ajouter-salon',
  imports: [FormsModule],
  templateUrl: './ajouter-salon.html',
  styleUrl: './ajouter-salon.css',
})
export class AjouterSalon {

  private authService = inject(AuthService);

  salonData: SalonInscriptionDTO = {
    nomSalon: '',
    categorie: undefined,
    email: '',
    motDePasse: ''
  };

  ajouterSalon() {
    this.authService.creationSalon(this.salonData).subscribe({
      next: (response) => {
        console.log('Salon ajouté avec succès :', response);
        // Vous pouvez ajouter une redirection ou un message de succès ici
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout du salon :', error);
        // Vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
    });
} 
}
