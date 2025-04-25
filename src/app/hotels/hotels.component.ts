import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-hotels',
  imports: [CommonModule, ErrorDialogComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent {
  userArr: any[] = [];
  cities: string[] = [];
  selectedCity: string = '';

  constructor(private httpHotels : ApiService) {}
  ngOnInit() {
    this.httpHotels.getHotels().subscribe((data: any) => {
      this.userArr = data;
      console.log(this.userArr);
    });

  


    
  }
 









}
