import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-bookedrooms',
  standalone: true,
  imports: [CommonModule, RouterModule, ErrorDialogComponent],
  templateUrl: './bookedrooms.component.html',
  styleUrl: './bookedrooms.component.scss'
})
export class BookedroomsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchBookings();
  }

  fetchBookings() {
    this.apiService.getBookings().subscribe({
      next: (data) => this.bookings = data,
      error: (err) => console.error('Error fetching bookings:', err)
    });
  }

  deleteBooking(id: number) {
    this.apiService.deleteBooking(id).subscribe({
      next: () => {
        alert('Booking successfully deleted');
        this.fetchBookings();
      },
      error: (err) => {
        console.error('Error deleting booking:', err);
        alert('Error deleting booking.');
      }
    });
  }
}