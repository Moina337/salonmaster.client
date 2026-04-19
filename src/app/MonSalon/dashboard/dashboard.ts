import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SalonService } from '../../api';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SalonDetail } from '../../api';
import { signal } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard {

  private salonService = inject(SalonService);

  salon = signal<SalonDetail | null>(null);

  ngOnInit() {
    this.loadSalon();
  }

  loadSalon() {
    this.salonService.afficherMonSalon().subscribe({
      next: (data) => this.salon.set(data)
    });
  }

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    this.salonService.modifImageProfil(file).subscribe({
      next: () => {
        console.log('Image profil mise à jour');
        this.loadSalon(); 
      }
    });
  }
}
