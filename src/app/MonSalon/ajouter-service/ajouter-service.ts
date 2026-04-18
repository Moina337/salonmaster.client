import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../api';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ServiceCreateDTO } from '../../api';


@Component({
  selector: 'app-ajouter-service',
  imports: [ FormsModule],
  templateUrl: './ajouter-service.html',
  styleUrl: './ajouter-service.css',
})


export class AjouterService {
  private serviceApi = inject(ServiceService);

  // Initialisation du DTO pour le service
  serviceData: ServiceCreateDTO = {
    nom: '',
    description: '',
    prix: 0,
    duree: 0
  };

  // Stockage du fichier image
  selectedImages: File[] = [];

  // Capture le changement de fichier dans l'input HTML
  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      // Ton API attend un Array<Blob>, on convertit la FileList en tableau
      this.selectedImages = Array.from(event.target.files);
    }
  }

  ajouterService() {
    // Appel de la méthode avec l'objet service et le tableau d'images
    this.serviceApi.ajouterUneService(this.serviceData, this.selectedImages).subscribe({
      next: (response) => {
        console.log('Service ajouté avec succès :', response);
        // Reset ou redirection ici
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout du service :', error);
      }
    });
  }
}
