import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import Swal from 'sweetalert2';

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
        Swal.fire({
          icon: 'success',
          title: 'Booking successfully deleted',
          showConfirmButton: false,
          width: '$00px',
          padding: '20px',
          timer: 1500
        });
        this.fetchBookings();
      },
      error: (err) => {
        console.error('Error deleting booking:', err);
        Swal.fire({
          icon: 'error',
          title: 'Error deleting booking',
          text: 'Please try again later.',
          width: '400px',
          padding: '20px',

        
        });
      }
    });
  }
}