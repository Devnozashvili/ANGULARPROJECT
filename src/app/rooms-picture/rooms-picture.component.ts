import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'; // Adjust the path as needed
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms-picture',
  imports: [CommonModule, ErrorDialogComponent],
  templateUrl: './rooms-picture.component.html',
  styleUrl: './rooms-picture.component.scss'
})
export class RoomsPictureComponent {
 constructor(private httpRoomsPicture: ApiService, 
  private rout : ActivatedRoute
 ) {this.rout.params.subscribe((params) => {
  this.selectedRoomId = params['id'];
  
  // console.log(this.selectedRoomId);
  // this.singleRoom = this.rooms.filter(room => room.id == this.selectedRoomId);
  // console.log(this.singleRoom[0]);
 })
}
  rooms: any[] = [];
  selectedRoomId: number = 1;
  singleRoom: any;
  ngOnInit() {
    this.httpRoomsPicture.getRooms().subscribe((data: any) => {
      this.rooms = data;
      console.log(this.rooms);
    });
  }
  get selectedRoom() {
    return this.rooms.find(room => room.id == this.selectedRoomId);
  }
  


}


