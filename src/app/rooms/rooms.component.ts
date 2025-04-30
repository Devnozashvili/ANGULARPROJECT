import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { BookingComponent } from '../booking/booking.component';
import { FormsModule } from '@angular/forms';
import { FilterRoomsModels } from '../../Models/filter-rooms-models';



@Component({
  selector: 'app-rooms',
  imports: [CommonModule,RouterModule, ErrorDialogComponent, FormsModule ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  rooms: any[] = [];
  filteredRooms: any[] = [];
  roomTypes: any[] = [];

  // ველის ინიციალიზაცია მოდელით
  filterData: FilterRoomsModels = {
    roomTypeId: 0,
    priceFrom: 0,
    priceTo: 0,
    maximumGuests: 1,
    checkIn: '',
    checkOut: ''
  };

  constructor(private httpRooms: ApiService) {}

  ngOnInit() {
    this.httpRooms.getRooms().subscribe((data: any) => {
      this.rooms = data;
      this.filteredRooms = data;
    });

    this.httpRooms.getRoomTypes().subscribe((types: any) => {
      this.roomTypes = types;
    });
  }

  onSubmit() {
    console.log(this.filterData); 
  
    this.httpRooms.filterRooms(this.filterData).subscribe((res: any) => {
      this.filteredRooms = res;
    });
  }



  reset(){
    this.filterData = {
      roomTypeId: 0,
      priceFrom: 0,
      priceTo: 0,
      maximumGuests: 1,
      checkIn: '',
      checkOut: ''
    };
    this.filteredRooms = this.rooms;
  }


  filterRoomsByType(typeId?: number) {
    // logic to filter rooms by typeId
    if (typeId) {
      // filter logic for specific type
    } else {
      // logic for "All" ///// აქ ეს გავაგრძელო
    }
  }
}