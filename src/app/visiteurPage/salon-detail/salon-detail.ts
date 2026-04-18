import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PublicService } from '../../api';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { computed } from '@angular/core';


@Component({
  selector: 'app-salon-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './salon-detail.html',
  styleUrl: './salon-detail.css',
})
export class SalonDetailComponent {

  private salonService = inject(PublicService);
  private route = inject(ActivatedRoute);

 salonId = Number(this.route.snapshot.paramMap.get('id'));

salon = toSignal(
  this.salonService.salonDetailCotePublic(this.salonId),
  { initialValue: null }
);
  
servicesWithImages = computed(() => {
  const salonData = this.salon();
  if (!salonData) return [];

  return (salonData.service ?? []).map(service => ({
    ...service,
    imagePrincipale: service.images?.[0]?.nom || null
  }));
});

}
