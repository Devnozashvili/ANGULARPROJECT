import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-error',
  imports: [RouterModule, ErrorDialogComponent],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

}
