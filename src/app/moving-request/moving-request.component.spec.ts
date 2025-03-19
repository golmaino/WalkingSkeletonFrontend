import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovingRequestService } from './moving-request.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router'; // 🔥 Router importieren!

@Component({
  selector: 'app-move-request',
  standalone: true,
  templateUrl: './moving-request.component.html',
  styleUrls: ['./moving-request.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterLink]
})
export class MoveRequestComponent {
  moveRequestForm: FormGroup;
  requestSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private moveRequestService: MovingRequestService,
    private router: Router
  ) {
    this.moveRequestForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      oldAddress: ['', Validators.required],
      newAddress: ['', Validators.required],
      movingDate: ['', Validators.required]
    });
  }

  submitMoveRequest(): void {
    if (this.moveRequestForm.valid) {
      this.moveRequestService.createMoveRequest(this.moveRequestForm.value).subscribe({
        next: (response) => {
          console.log('Move request created:', response);
          this.requestSubmitted = true;
          alert("Move request successfully created!");
          this.moveRequestForm.reset();
        },
        error: (error) => {
          console.error('Error creating move request:', error);
        }
      });
    }
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
