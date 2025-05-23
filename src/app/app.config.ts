import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpinterceptorService } from './services/httpinterceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
       provideRouter(routes),
       provideHttpClient(),
       provideHttpClient(
        withInterceptorsFromDi()
       ),
       {
         provide: HTTP_INTERCEPTORS,
         useClass: HttpinterceptorService,
          multi: true
       }
    ]
   

};
