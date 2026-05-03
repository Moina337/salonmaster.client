import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../api';
import { AuthResponse } from '../../api';
import { ConnexionDTO } from '../../api';
import { inject} from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session-service';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-connexion',
  imports: [FormsModule, CommonModule],
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

  loading: boolean = false;

seConnecter() {

 this.loading = true;
this.errorMessage = '';

this.authService.connexion(this.connexionDTO)
  .pipe(
    finalize(() => {
      this.loading = false; // 🔥 TOUJOURS exécuté
    })
  )
  .subscribe({
    next: (res) => {
      if (res.token) {
        this.sessionService.saveToken(res.token);
        this.router.navigate(['/mon-salon']);
      }
    },

    error: (err) => {

      this.loading = false;
      this.errorMessage = err?.error?.message ;
      console.error('Erreur de connexion :', err);
    }
  });
}
}
