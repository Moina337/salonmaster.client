import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { PublicService } from '../../api';
import { SalonDTO } from '../../api';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import{ computed } from '@angular/core';

@Component({
  selector: 'app-liste-salon',
  standalone: true,
  imports: [RouterLink, NgxPaginationModule, FormsModule],
  templateUrl: './liste-salon.html',
  styleUrl: './liste-salon.css',
})
export class ListeSalon {

  p = 1;
  searchTerm = '';
  selectedCategory = '';

  private salonService = inject(PublicService);

  salons = toSignal(
    this.salonService.afficheDesSalonCotePublic(),
    { initialValue: [] as SalonDTO[] }
  );

  filteredAndSortedSalons = computed(() => {
    return this.salons()
      .filter(salon => {
        const term = this.searchTerm.toLowerCase();

        const matchNameOrAddress =
          (salon.nom ?? '').toLowerCase().includes(term) ||
          (salon.adresse ?? '').toLowerCase().includes(term);

        const matchCategory =
          this.selectedCategory === '' ||
          (salon.categorie ?? '') === this.selectedCategory;

        return matchNameOrAddress && matchCategory;
      })
      .sort((a, b) => {
        if (!a.categorie) return 1;
        if (!b.categorie) return -1;
        return a.categorie.localeCompare(b.categorie);
      });
  });
}