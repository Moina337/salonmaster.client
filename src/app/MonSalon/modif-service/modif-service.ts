import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../api';
import { Router } from '@angular/router';
import { inject, effect } from '@angular/core';
import { ServiceDTO } from '../../api';
import { ServiceupdateInfo } from '../../api';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Route } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modif-service',
  imports: [FormsModule, CommonModule],
  templateUrl: './modif-service.html',
  styleUrl: './modif-service.css',
})


export class ModifService {
  private serviceService = inject(ServiceService);
  private route = inject(ActivatedRoute);

  serviceId = Number(this.route.snapshot.paramMap.get('id'));
  

  // Objet qui sera lié au formulaire via ngModel
  serviceData: ServiceupdateInfo = {
    nom: '',
    description: '',
    prix: 0,
    duree: 0,
  };

  // Chargement des données depuis l'API
  service = toSignal(
    this.serviceService.chercherServiceParId(this.serviceId)
  );

  constructor() {
    // L'effect s'exécute automatiquement dès que 'service' change
    effect(() => {
      const data = this.service();
      if (data) {
        // On remplit serviceData avec les valeurs reçues
        this.serviceData = {
          nom: data.nom,
          description: data.description,
          prix: data.prix,
          duree: data.duree
        };
      }
    });
  }

  modifierService() {
    if(this.serviceId) {
      console.log(' de this.serviceId est : ' + this.serviceId);  
      this.serviceService.modifierInfoService(this.serviceId, this.serviceData).subscribe({
        next: () => alert('Mise à jour réussie !'),
        error: (err) => console.error(err)
      });
    }
  }

  // Appelé quand on clique sur "Enregistrer les modifications"
  onSubmit() {
    this.serviceService.modifierInfoService(this.serviceId, this.serviceData).subscribe({
      next: () => alert('Mise à jour réussie !'),
      error: (err) => console.error(err)
    });
  }

  // Appelé quand on sélectionne un nouveau fichier pour remplacer une image existante
  onImageChange(idImage: number | undefined, event: any) {
    const file: File = event.target.files[0];
    if (file && idImage) {
      this.serviceService.midifierImageService(idImage, file).subscribe({
        next: () => {
          alert('Image modifiée avec succès !');
          window.location.reload(); // Pour rafraîchir l'affichage
        },
        error: (err) => console.error(err)
      });
    }
  }

  // Appelé pour supprimer une image
  supprimerImage(idImage: number | undefined) {
    if (idImage && confirm('Voulez-vous vraiment supprimer cette image ?')) {
      this.serviceService.supprimerImageService(idImage).subscribe({
        next: () => {
          alert('Image supprimée !');
          window.location.reload(); // Pour rafraîchir l'affichage
        },
        error: (err) => console.error(err)
      });
    }
  }


}
