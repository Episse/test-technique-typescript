import { Injectable } from '@angular/core';
import { ResultModel } from './model/result.model';
import { ResultEventModel } from './model/result-event.model';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/injector';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private results: ResultModel[] = []; // représente les données qu'il faudrait aller chercher dans une bdd

  public results$: Observable<ResultModel[]>;

  constructor() {
    this.results$ = of(this.results);
  }

  public addResult(newResult: ResultModel) {

  }

  public seenResult(idResult: number) {

  }

  public unseenResult(idResult: number) {

  }

  public getAllResult(): Observable<ResultModel[]> {
    return this.results$;
  }

  public getAllResultSeen(): Array<ResultModel> {
    return null;
  }

  public getAllResultUnSeen(): Array<ResultModel> {
    return null;
  }

  public numberOfEventSeen(): number {
    return null;
  }
}
