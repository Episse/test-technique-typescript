import { ResultModel } from '../result/model/result.model';

export const initialResults: ResultModel[] = [];

export interface AppState {
    results: ResultModel[];
}
