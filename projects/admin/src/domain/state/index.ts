import { inject, Injectable } from '@angular/core';
import { ReservationState } from './reservation.state';
import { RouteState } from './route.state';
import { FlightState } from "./flight.state";
import { AnalyticsState } from "./analytics.state";
@Injectable({
  providedIn: 'root',
})
export class StateIndex {
  private readonly _reservation = inject(ReservationState);
  private readonly _analytics = inject(AnalyticsState);
  private readonly _flight = inject(FlightState);
  private readonly _routes = inject(RouteState);

  get reservationStateIndex() {
    return this._reservation.store();
  }

  get analyticsStateIndex(){
    return this._analytics.store();
  }
  get routeStateIndex() {
    return this._routes.store();
  }
  get flights() {
    return this._flight.store();
  }
}
