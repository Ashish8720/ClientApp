import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { InitService } from '../services/init-service';
import { lastValueFrom } from 'rxjs';
import { errorInterceptor } from './error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes , withViewTransitions()),
    provideHttpClient(withInterceptors([errorInterceptor])),  // add the interceptors 
    provideAppInitializer(async () => {
      const initService = inject(InitService);
      return new Promise<void>((resolve) => {
        setTimeout(async () =>{
          try{
            return lastValueFrom(initService.appInit());
          }
          finally{
            const loader = document.getElementById('app-loader');
            if(loader){
              loader.remove();
            }
            resolve();
          }
          
        } , 500)
      })
    })
  ]
};
