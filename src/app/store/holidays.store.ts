import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from './state/app.state';
import {routerReducer} from '@ngrx/router-store';
import {holidayReducers} from './reducers/holiday.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  holidays: holidayReducers
};
