import { Injectable, inject } from "@angular/core";
import { of, Subscription, tap } from "rxjs";
import { StateIndex } from "../domain/state";
import { FindAllAnalyticsService } from "../infrastructure/services/find-all-analytics.service";
import { analyticsDataset } from "../infrastructure/data/analytics-dataset";

@Injectable({
  providedIn: 'root'
})
export class FindAllAnalyticsUseCase{
  private readonly _service = inject(FindAllAnalyticsService);
  private readonly _state = inject(StateIndex);
  private subscriptions: Subscription;

  analytics$(){
    return this._state.analyticsStateIndex.analytics.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  execute(){
    this.subscriptions.add(
      this._service.execute()
      .pipe(
        tap(this._state.analyticsStateIndex.analytics.set)
      ).subscribe()
    ) 
  /*  of(analyticsDataset)
   .pipe(
    tap(this._state.analyticsStateIndex.analytics.set)
   ).subscribe()
  ) */
  }
}
