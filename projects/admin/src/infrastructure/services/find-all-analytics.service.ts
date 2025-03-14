import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IAnalyticsData } from '../../domain/model/analytics-data-model';
import { urlResources } from 'shared';

@Injectable({
  providedIn: 'root'
})
export class FindAllAnalyticsService {

  private readonly _http = inject(HttpClient)

  constructor() { }

  execute():Observable<IAnalyticsData>{
    return this._http.get<IAnalyticsData>(urlResources.analytics)
  }
}
