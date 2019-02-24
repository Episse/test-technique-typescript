import { ResultModel } from 'src/app/result/model/result.model';
import { ADD_RESULT, SEEN_RESULT, UNSEEN_RESULT } from '../actions/results.actions';
import { Actions as ResultsActions} from '../actions/results.actions';
import { initialResults } from '../app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ResultEventModel } from 'src/app/result/model/result-event.model';

export function ResultsReducer(state: ResultModel[] = initialResults, action: ResultsActions ) {
    console.log(action.type);
    switch (action.type) {
        case ADD_RESULT:
            if (state.find(result => result.id === action.payload.id)) {
                return state;
            }
            action.payload.eventResults.push(
                {
                    id: 'created',
                    idOwner: action.payload.idOwner,
                    createdAt: new Date()
                }
            );
            return [...state, action.payload];
        case SEEN_RESULT:
            return state.map(result => {
                if (result.id === action.payload) {
                    result.isSeen = true;
                    result.eventResults.push(
                        {
                            id: 'seen',
                            idOwner: result.idOwner,
                            createdAt: new Date()
                        }
                    );
                }
                return result;
            });
        case UNSEEN_RESULT:
            return state.map(result => {
                if (result.id === action.payload) {
                    result.isSeen = false;
                }
                return result;
            });
        default:
            return state;
    }
}

export const getResults = createFeatureSelector<ResultModel[]>('results');

export const getSeenResults = createSelector(
    getResults,
    (results: ResultModel[]) => {
        return results.filter((result: ResultModel) => result.isSeen);
    }
);
export const getUnseenResults = createSelector(
    getResults,
    (results: ResultModel[]) => {
        return results.filter((result: ResultModel) => !result.isSeen);
    }
);
