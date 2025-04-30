import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'; // Adjust the path as needed
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-rooms-picture',
  imports: [CommonModule, ErrorDialogComponent],
  templateUrl: './rooms-picture.component.html',
  styleUrl: './rooms-picture.component.scss'
})
export class RoomsPictureComponent {
 constructor(private httpRoomsPicture: ApiService) {}
  rooms: any[] = [];
  ngOnInit() {
    this.httpRoomsPicture.getRooms().subscribe((data: any) => {
      this.rooms = data;
      console.log(this.rooms);
    });
  }

}


