import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BASE_PATH } from './api';
import { authInterceptor } from './core/interceptors/auth-interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    // ICI la bonne config
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),

    { provide: BASE_PATH, useValue: 'http://localhost:8080' }
  ]
};