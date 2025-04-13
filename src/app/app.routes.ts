import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookedroomsComponent } from './bookedrooms/bookedrooms.component';
import { ErrorComponent } from './error/error.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'hotels', component: HotelsComponent },
    { path: 'bookedrooms', component: BookedroomsComponent },


    {path : "**", component: ErrorComponent }
  ];
  
