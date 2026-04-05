import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import NoraLight from '@primeng/themes/nora';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    MessageService,
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: NoraLight,
        options: {
           darkModeSelector: '.my-app-dark' 
        }
      }
    })
  ]
};
