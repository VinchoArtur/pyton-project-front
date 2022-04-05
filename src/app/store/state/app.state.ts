import {RouterReducerState} from '@ngrx/router-store';
import {IHolidayState, initialHolidayState} from './holiday.state';

export interface IAppState {
  router?: RouterReducerState;
  holidays: IHolidayState;
}

export const initialAppState: IAppState = {
  holidays: initialHolidayState
};

export function getInitialAppState(): IAppState {
  return initialAppState;
}
