import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoveRequest } from '../moving-request/moving-request.model';

@Injectable({
  providedIn: 'root'
})
export class MovingRequestService {
  private apiUrl = 'http://localhost:8080/api/moving-requests';

  constructor(private http: HttpClient) {}

  createMoveRequest(request: MoveRequest): Observable<MoveRequest> {
    return this.http.post<MoveRequest>(this.apiUrl, request);
  }

  getAllMoveRequests(): Observable<MoveRequest[]> {
    return this.http.get<MoveRequest[]>(this.apiUrl);
  }
}
