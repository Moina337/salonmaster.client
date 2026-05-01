// app.config.ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BASE_PATH } from './api';
import { authInterceptor } from './core/interceptors/auth-interceptor';
import { ngrokInterceptor } from './core/interceptors/ngrok-interceptor';
import { environment } from '../environments/environment';

import { routes } from './app.routes';

const interceptors = [
  authInterceptor,
  ...(environment.useNgrok ? [ngrokInterceptor] : [])
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    provideHttpClient(
      withInterceptors(interceptors)
    ),

    { provide: BASE_PATH, useValue: environment.apiUrl }
  ]
};