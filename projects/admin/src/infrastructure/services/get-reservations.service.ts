import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReservationData } from '../../domain/model/reservation.model';
import { urlResources } from 'shared';

@Injectable({
  providedIn: 'root'
})
export class GetReservationsService {

  private readonly _http = inject(HttpClient);
  execute(): Observable<IReservationData[]> {
    return this._http.get<IReservationData[]>(urlResources.booking);
  }
}


