import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';


@Component({
  selector: 'app-rooms',
  imports: [CommonModule,RouterModule, ErrorDialogComponent ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  rooms: any[] = [];

  constructor(private httpRooms: ApiService) {}

  ngOnInit() {
    this.httpRooms.getRooms().subscribe((data: any) => {
      this.rooms = data;
      console.log(this.rooms);
    });
  }


}
