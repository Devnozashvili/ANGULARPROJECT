import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { BookingService } from '../services/booking.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Bookingmodel } from '../../Models/bookingmodel';

@Component({
  selector: 'app-booking',
  imports: [ CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {


  constructor(private bookingService: BookingService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Swal
        .fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill in all required fields.',
          confirmButtonText: 'OK'
        });
      // alert('please fill in all required fields.');
      return;
    }
  
    const formData = form.value;
  
    const bookingData: Bookingmodel = {
      roomID: 1,
      checkInDate: new Date(formData.checkInDate).toISOString(),
      checkOutDate: new Date(formData.checkOutDate).toISOString(),
      totalPrice: 200,
      isConfirmed: true,
      customerName: formData.customerName,
      customerId: "123",
      customerPhone: formData.customerPhone
    };
  
    this.bookingService.createBooking(bookingData).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'Booking Successful',
          text: 'Your booking has been confirmed!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // alert("Booking successful!");
        console.log("Response:", response);
        form.reset();
      },
      error: (err) => {
        console.error("error", err);
        Swal.fire({
          icon: 'error',
          title: 'Booking Error',
          text: err.error?.message || err.message,
          confirmButtonText: 'OK'
        });
        // alert("Booking Error " + (err.error?.message || err.message));
      }
    });
  }

  
  }

