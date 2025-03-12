import { Component } from '@angular/core';

@Component({
  selector: 'app-move-request',
  templateUrl: './moving-request.component.html',
  standalone: true,
  styleUrls: ['./moving-request.component.css']
})
export class MoveRequestComponent {
  oldAddress: string = '';
  newAddress: string = '';
  movingDate: string = '';

  constructor() {}

  submitMoveRequest(): void {
    if (!this.oldAddress || !this.newAddress || !this.movingDate) {
      console.error('All fields must be filled out.');
      return;
    }
    console.log('Move request submitted:', {
      oldAddress: this.oldAddress,
      newAddress: this.newAddress,
      movingDate: this.movingDate
    });
  }
}
