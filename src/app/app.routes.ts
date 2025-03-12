import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoveRequestComponent } from './moving-request/moving-request.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'moving', component: MoveRequestComponent }
];
