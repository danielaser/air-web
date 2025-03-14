import { inject, Injectable } from "@angular/core";
import { ReservationState } from "./reservation.state";
import { AnalyticsState } from "./analytics.state";

@Injectable({
  providedIn: 'root'
})
export class StateIndex {
  private readonly _reservation = inject(ReservationState);
  private readonly _analytics = inject(AnalyticsState);

  get reservationStateIndex() {
    return this._reservation.store();
  }

  get analyticsStateIndex(){
    return this._analytics.store();
  }
}
