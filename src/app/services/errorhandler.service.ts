import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  constructor() { }
  dialogSubject = new Subject<any>();
  dialogState = this.dialogSubject.asObservable();

  showDialog(message: "error "){
    this.dialogSubject.next({ show: true, message });
  }

  hidedialog() {
    this.dialogSubject.next({ show: false });
  }
}
