import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from './services/session-service';

export const guestGuard: CanActivateFn = (route, state) => {
  const session = inject(SessionService);
  const router = inject(Router);

  if (session.isConnected()) {
    // Si déjà connecté, on le redirige vers le salon
    return router.parseUrl('/mon-salon');
  } else {
    // Sinon, on le laisse accéder à la page de connexion
    return true;
  }
};
