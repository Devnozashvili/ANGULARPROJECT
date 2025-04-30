import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterRoomsModels } from '../../Models/filter-rooms-models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
constructor(private http: HttpClient) { }

private readonly bookingUrl = 'https://hotelbooking.stepprojects.ge/api/Booking';
getHotels()  : Observable<any[]> {
  return this.http.get<any[]>('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll');
}
getCities(): Observable<string[]> {
  return this.http.get<string[]>('https://hotelbooking.stepprojects.ge/api/Hotels/GetCities');
}


getRooms(): Observable<any[]> {
  return this.http.get<any[]>('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll');
}

getRoomTypes(): Observable<any[]> {
  return this.http.get<any[]>('https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes');
}


 getBookings(): Observable<any[]> {
  return this.http.get<any[]>(this.bookingUrl);
}


deleteBooking(id: number): Observable<any> {
  return this.http.delete(`${this.bookingUrl}/${id}`, {
    responseType: 'text'
  });
}

getRoom(id: number) {
  return this.http.get<any>(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`);
}
filterRooms(data: FilterRoomsModels ) {
  return this.http.post('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', data); // შეცვალე URL
}


}