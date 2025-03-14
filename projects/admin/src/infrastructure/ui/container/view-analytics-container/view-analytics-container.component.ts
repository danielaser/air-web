import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ViewAnalyticsComponent } from "../../components/view-analytics/view-analytics.component";
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FindAllAnalyticsUseCase } from '../../../../application/find-all-analytics-usecase';
import { IAnalyticsData } from '../../../../domain/model/analytics-data-model';

@Component({
  selector: 'lib-view-analytics-container',
  imports: [ViewAnalyticsComponent, CommonModule],
  templateUrl: './view-analytics-container.component.html',
})
export class ViewAnalyticsContainerComponent implements OnInit, OnDestroy {

  private readonly _findAllAnalyticsData = inject(FindAllAnalyticsUseCase);

  bookings$ : Observable<IAnalyticsData>;

  ngOnInit(): void {
    this._findAllAnalyticsData.initSubscriptions();
    this._findAllAnalyticsData.execute();
    this.bookings$ = this._findAllAnalyticsData.analytics$();

  }
  ngOnDestroy(): void {
    this._findAllAnalyticsData.destroySubscriptions();

  }



}
