import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MoveRequest } from './moving-request.model';

@Component({
  selector: 'app-move-request',
  standalone: true,
  templateUrl: './moving-request.component.html',
  styleUrls: ['./moving-request.component.css'],
  imports: [FormsModule, CommonModule, RouterLink]
})
export class MoveRequestComponent {
  moveRequest: MoveRequest = {
    firstName: '',
    lastName: '',
    oldAddress: '',
    newAddress: '',
    movingDate: ''
  };

  constructor(private router: Router) {}
  requestSubmitted = false;

  submitMoveRequest(): void {
    if (!this.moveRequest.firstName || !this.moveRequest.lastName ||
      !this.moveRequest.oldAddress || !this.moveRequest.newAddress ||
      !this.moveRequest.movingDate) {
      console.error('All fields must be filled out.');
      return;
    }

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('moveRequest', JSON.stringify(this.moveRequest));
      console.log('Move request submitted and saved:', this.moveRequest);
    }

    this.requestSubmitted = true;
    this.resetForm();
  }

  resetForm(): void {
    this.moveRequest = {
      firstName: '',
      lastName: '',
      oldAddress: '',
      newAddress: '',
      movingDate: ''
    };
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
