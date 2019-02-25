import { Injectable } from '@angular/core';
import { ResultModel } from './model/result.model';
import { ResultEventModel, stateResult } from './model/result-event.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AddResult, SeenResult, UnseenResult } from '../store/actions/results.actions';
import { getSeenResults, getUnseenResults} from '../store/reducers/results.reducers';

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

  public getAllResults(): Observable<ResultModel[]> {
    return this.store.select('results');
  }

  public getAllResultsSeen(): Observable<ResultModel[]> {
    return this.store.select(getSeenResults);
  }

  public getAllResultsUnSeen(): Observable<ResultModel[]> {
    return this.store.select(getUnseenResults);
  }

  public numberOfEventSeen(): number {
    return null;
  }

  public getDate(wantedDate: stateResult, result: ResultModel): Date {
    const creationEventResult: ResultEventModel | undefined = result.eventResults.length > 0 ? result.eventResults.find(eventResult => eventResult.id === wantedDate) : undefined;
    return ((creationEventResult ===  undefined) ? undefined : creationEventResult.createdAt);
  }

  public getOrderedAllResult(): Observable<ResultModel[]> {
    return this.store.select('results').pipe(
      map((results: ResultModel[]) => {
        results.sort((resultA, resultB) => this.getLastEvent(resultB).createdAt.getTime() - this.getLastEvent(resultA).createdAt.getTime());
        return results;
      }
    ));
  }

  public getLastEvent(result: ResultModel): ResultEventModel {
    return result === undefined ? undefined : result.eventResults.reduce((eventA, eventB) =>
            eventA.createdAt.getTime() > eventB.createdAt.getTime() ? eventA : eventB
      );
  }
}
