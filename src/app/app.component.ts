import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, FooterComponent, RouterModule]
})
export class AppComponent {
  title = 'my-angular-app';

  showSuccessAlert() {
    swal.fire({
      title: 'Success!',
      text: 'Your booking has been successfully created.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
  showErrorAlert() {
    swal.fire({
      title: 'Error!',
      text: 'An error occurred while creating your booking.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }


}
