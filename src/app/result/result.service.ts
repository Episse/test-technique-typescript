import { Injectable } from '@angular/core';
import { ResultModel } from './model/result.model';
import { ResultEventModel } from './model/result-event.model';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/injector';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AddResult, SeenResult, UnseenResult } from '../store/actions/results.actions';
import { getSeenResults, getUnseenResults } from '../store/reducers/results.reducers';

@Injectable({
  providedIn: 'root'
})
export class ResultService {


  constructor(private store: Store<AppState>) {
  }

  public addResult(newResult: ResultModel) {
    this.store.dispatch(new AddResult(newResult));
  }

  public seenResult(idResult: number) {
    this.store.dispatch(new SeenResult(idResult));
  }

  public unseenResult(idResult: number) {
    this.store.dispatch(new UnseenResult(idResult));

  }

  public getAllResult(): Observable<ResultModel[]> {
    return this.store.select('results');
  }

  public getAllResultSeen(): Observable<ResultModel[]> {
    return this.store.select(getSeenResults);
  }

  public getAllResultUnSeen(): Observable<ResultModel[]> {
    return this.store.select(getUnseenResults);
  }

  public numberOfEventSeen(): number {
    return null;
  }
}
