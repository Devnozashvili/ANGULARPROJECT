// booking.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private api: HttpClient) { }

  filter(obj : any){
    return this.api.post('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', obj);
  }

  createBooking(bookingData: any) {
    return this.api.post('https://hotelbooking.stepprojects.ge/api/Booking', bookingData, {
      responseType: 'text' 
    });
  }

}