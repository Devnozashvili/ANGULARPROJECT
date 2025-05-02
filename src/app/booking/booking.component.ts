import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { BookingService } from '../services/booking.service';
import { CommonModule } from '@angular/common';

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
      alert('please fill in all required fields.');
      return;
    }
  
    const formData = form.value;
  
    const bookingData = {
     
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
        alert("Booking successful!");
        console.log("Response:", response);
      },
      error: (err) => {
        console.error("error", err);
        alert("Booking Error " + (err.error?.message || err.message));
      }
    });
  }


  
  }

