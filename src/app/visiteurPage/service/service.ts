import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../api';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ServiceDTO } from '../../api';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-service',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {

  private serviceApi = inject(ServiceService);
  private route = inject(ActivatedRoute);

  serviceDto: ServiceDTO = {
    id: 0,
    nom: '',
    description: '',
    prix: 0,
    duree: 0
  };

  salonId = Number(this.route.snapshot.paramMap.get('id'));
  service = toSignal(

    this.serviceApi.chercherServiceParId(this.salonId),
    { initialValue: this.serviceDto }
  );
}
