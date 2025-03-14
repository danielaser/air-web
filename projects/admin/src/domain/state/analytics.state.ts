import { BehaviorSubject } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { StateFactory } from "shared";
import { IAnalyticsData } from "../model/analytics-data-model";

@Injectable({
  providedIn: 'root'
})
export class AnalyticsState {
  private readonly _factory = inject(StateFactory);
  //#region Observables
  private readonly analytics$ = new BehaviorSubject<IAnalyticsData>({} as IAnalyticsData);

  //#endregion

  store() {
    return {
      analytics: this._factory.state(this.analytics$),

    }
  }
}
