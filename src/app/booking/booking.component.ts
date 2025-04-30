import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-booking',
  imports: [ErrorDialogComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {


  constructor(private http: HttpClient) { }

  bookingUrl = 'https://hotelbooking.stepprojects.ge/api/Booking';
  bookings: any[] = [];
  selectedBookingId: number | null = null;

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
    this.http.get<any[]>(this.bookingUrl).subscribe(data => {
      this.bookings = data;
    });
  }

  deleteBooking(id: number) {
    this.http.delete(`${this.bookingUrl}/${id}`, { responseType: 'text' }).subscribe(() => {
      this.getBookings();
    });
  }

}