import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  imports: [CommonModule, ErrorDialogComponent, FormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent {
  allHotels: any[] = [];
  userArr: any[] = [];
  cities: string[] = [];
  selectedCity: string = '';

  constructor(private httpHotels : ApiService) {}
  ngOnInit() {
    this.httpHotels.getHotels().subscribe((data: any[]) => {
      this.allHotels = data;
      this.userArr = data; 
      this.getCities();    
    });
  }

  getCities() {
    this.cities = [...new Set(this.allHotels.map(hotel => hotel.city))];
    console.log('Cities:', this.cities);
  }

  filterHotelsByCity(city: string) {
    if (!city) {
      this.userArr = this.allHotels; 
    } else {
      this.userArr = this.allHotels.filter(hotel => hotel.city === city);
    }
  }

  onCityChange(city: string) {
    console.log('Selected city:', city);
    this.filterHotelsByCity(city);
  }
}