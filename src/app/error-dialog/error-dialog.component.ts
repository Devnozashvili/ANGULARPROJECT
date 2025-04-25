import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ErrorhandlerService } from '../services/errorhandler.service';

@Component({
  selector: 'app-error-dialog',
  imports: [CommonModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {
  constructor(private errorHandler : ErrorhandlerService) {
 this.errorHandler.dialogState.subscribe(
  state => {
    this.showDialog = state.show
    this.errorMessage = state.message
    
  } 
  
 )
  }
errorMessage = ""
showDialog:boolean = false;

  closeDialog() {
    this.showDialog = false;
    this.errorHandler.hidedialog();
  }
}
