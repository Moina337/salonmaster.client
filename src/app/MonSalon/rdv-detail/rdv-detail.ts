import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RendezVousService } from '../../api';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RendezVousDetail } from '../../api';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-rdv-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './rdv-detail.html',
  styleUrl: './rdv-detail.css',
})

export class RdvDetail {
  private rdvService = inject(RendezVousService);
  private route = inject(ActivatedRoute);
  
  // Récupération de l'ID depuis l'URL
  private idRdv = Number(this.route.snapshot.paramMap.get('id'));

  // Signal pour stocker les détails du rendez-vous
  rdvDetail = toSignal(
    this.rdvService.afficheerUnRrnderVousParId(this.idRdv)
  );
}

