import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookedroomsComponent } from './bookedrooms/bookedrooms.component';
import { ErrorComponent } from './error/error.component';


export const routes: Routes = [


    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
      path : "home",
      loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
      path : "rooms",
      loadComponent: () => import('./rooms/rooms.component').then(m => m.RoomsComponent)
    },
    {
      path : "hotels",
      loadComponent: () => import('./hotels/hotels.component').then(m => m.HotelsComponent)
    },
    {
      path : "bookedrooms",
      loadComponent: () => import('./bookedrooms/bookedrooms.component').then(m => m.BookedroomsComponent)
 
    },

     {path : "**", component: ErrorComponent }


  ];
  
