import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from './services/session-service';

export const authGuard: CanActivateFn = (route, state) => {
  const session = inject(SessionService);
  const router = inject(Router);

  if (session.isConnected()) {
    return true;
  } else {
    // Redirection vers la page de connexion
    
    return router.parseUrl('/connexion');
  }
};
