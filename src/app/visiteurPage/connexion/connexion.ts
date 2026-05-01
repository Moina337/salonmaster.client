import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../api';
import { AuthResponse } from '../../api';
import { ConnexionDTO } from '../../api';
import { inject} from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session-service';

@Component({
  selector: 'app-connexion',
  imports: [FormsModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css',
})
export class Connexion {
  connexionDTO: ConnexionDTO = {
    email: '',
    motDePasse: ''
  };


  errorMessage: string = '';

  private authService = inject(AuthService);
  private router = inject(Router);
   private sessionService = inject(SessionService);

  seConnecter() {
  
    this.authService.connexion(this.connexionDTO).subscribe({
      next: (response: AuthResponse) => {
        console.log('Connexion réussie :', response);
       
        // Stockez le token dans le localStorage ou utilisez-le selon vos besoins
        if (response.token) {
          this.sessionService.saveToken(response.token);
          console.log('Token stocké dans localStorage :', response.token);  
          // redirection dans mon salon
           this.router.navigate(['/mon-salon']);
        }
         
      },
      error: (error) => {
        console.error('Erreur lors de la connexion :', error);
        this.errorMessage = 'Échec de la connexion. Veuillez vérifier vos informations.';
      }
    });
  }
}
