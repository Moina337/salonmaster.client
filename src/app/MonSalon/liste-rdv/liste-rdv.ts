import { Component } from '@angular/core';
import { SalonService } from '../../api';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RendezVousDTO } from '../../api';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-rdv',
  imports: [  CommonModule, RouterLink],
  templateUrl: './liste-rdv.html',
  styleUrl: './liste-rdv.css',
})
export class ListeRdv {
  private salonApi = inject(SalonService);

  rendezVous = toSignal(
    this.salonApi.listeRendezVousSalon(),
    { initialValue: [] as RendezVousDTO[] }
  );
}
