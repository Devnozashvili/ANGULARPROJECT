import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { FormsModule } from '@angular/forms';
import { FilterRoomsModels } from '../../Models/filter-rooms-models';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RouterModule, ErrorDialogComponent, FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  rooms: any[] = [];       
  allRooms: any[] = [];    
  roomTypes: any[] = [];

  roomType = 0;
  priceFrom = 0;
  priceTo = 1000;
  maxGuests = 1;
  checkIn = new Date();
  checkOut = new Date();

  filterData: FilterRoomsModels = {
    roomTypeId: 0,
    priceFrom: 0,
    priceTo: 1000,
    maximumGuests: 1,
    checkIn: '',
    checkOut: ''
  };

  constructor(
    private httpRooms: ApiService,
    private api: BookingService
  ) {}

  ngOnInit() {
    this.httpRooms.getRooms().subscribe((data: any) => {
      this.allRooms = data;
      this.rooms = data;
    });

    this.httpRooms.getRoomTypes().subscribe((types: any) => {
      this.roomTypes = types;
    });
  }

  // ღილაკებით ფილტრაცია
  filterRoomsByType(typeId?: number) {
    if (typeId) {
      this.rooms = this.allRooms.filter(room => room.roomTypeId == typeId);


    } else {
      this.rooms = this.allRooms;
    }
  }

  // ფორმის ფილტრაცია
  filter() {
    this.filterData.checkIn = this.checkIn.toString();
    this.filterData.checkOut = this.checkOut.toString();
    this.filterData.roomTypeId = this.roomType;
    this.filterData.priceFrom = this.priceFrom;
    this.filterData.priceTo = this.priceTo;
    this.filterData.maximumGuests = this.maxGuests;

    this.api.filter(this.filterData).subscribe((data: any) => {
      this.rooms = data;
    });
  }

  // ფორმის reset
  reset() {
    this.filterData = {
      roomTypeId: 0,
      priceFrom: 0,
      priceTo: 1000,
      maximumGuests: 1,
      checkIn: '',
      checkOut: ''
    };
    this.httpRooms.getRooms().subscribe((data: any) => {
      this.allRooms = data;
      this.rooms = data;
    });
  }
}
