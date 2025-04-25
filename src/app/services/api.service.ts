import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
constructor(private http: HttpClient) { }

private readonly bookingUrl = 'https://hotelbooking.stepprojects.ge/api/Booking';
getHotels() {
  return this.http.get('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll');
}
getCities(): Observable<string[]> {
  return this.http.get<string[]>('https://hotelbooking.stepprojects.ge/api/Hotels/GetCities');
}


getRooms(): Observable<any[]> {
  return this.http.get<any[]>('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll');
}


 getBookings(): Observable<any[]> {
  return this.http.get<any[]>(this.bookingUrl);
}


deleteBooking(id: number): Observable<any> {
  return this.http.delete(`${this.bookingUrl}/${id}`, {
    responseType: 'text'
  });
}

}