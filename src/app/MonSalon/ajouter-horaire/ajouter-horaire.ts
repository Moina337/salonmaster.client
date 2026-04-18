import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HoraireService, HoraireOuvertureDTO } from '../../api';

@Component({
  selector: 'app-ajouter-horaire',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-horaire.html'
})
export class AjouterHoraire {
  private horaireService = inject(HoraireService);

  jours = Object.values(HoraireOuvertureDTO.JourEnum);
  
  // Liste des horaires à envoyer
  listeHoraires = signal<HoraireOuvertureDTO[]>([]);

  // Modèle pour le formulaire actuel
  currentHoraire: HoraireOuvertureDTO = {
    jour: HoraireOuvertureDTO.JourEnum.Lundi,
    heureOuverture: '09:00',
    heureFermeture: '18:00'
  };

  // Ajouter l'horaire actuel à la liste temporaire
  ajouterALaListe() {
    this.listeHoraires.update(list => [...list, { ...this.currentHoraire }]);
  }

  // Supprimer un horaire de la liste avant envoi
  retirerDeLaListe(index: number) {
    this.listeHoraires.update(list => list.filter((_, i) => i !== index));
  }

  // Envoi final de toute la liste à l'API
  enregistrerTout() {
    // Si ton API accepte un tableau :
    this.horaireService.ajouterHoraire(this.listeHoraires()).subscribe({
      next: () => alert('Tous les horaires ont été enregistrés !'),
      error: () => alert('Erreur lors de l\'enregistrement')
    });
  }
}
