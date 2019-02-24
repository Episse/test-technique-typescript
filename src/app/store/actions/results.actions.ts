import { Action } from '@ngrx/store';
import { ResultModel } from 'src/app/result/model/result.model';

export const ADD_RESULT = '[results] ADD_RESULT';
export const SEEN_RESULT = '[results] SEEN_RESULT';
export const UNSEEN_RESULT = '[results] UNSEEN_RESULT';

export class AddResult implements Action {
    readonly type = ADD_RESULT;

    constructor(public payload: ResultModel) {}
}

export class SeenResult implements Action {
    readonly type = SEEN_RESULT;

    constructor(public payload: number) {}
}
export class UnseenResult implements Action {
    readonly type = UNSEEN_RESULT;

    constructor(public payload: number) {}
}

export type Actions = AddResult | SeenResult | UnseenResult;
