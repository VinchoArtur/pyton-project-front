import {IAppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {IHolidayState} from '../state/holiday.state';
import {IHolidayWrapper} from '../../models/holiday';

const selectHolidays = (state: IAppState) => state.holidays;

export const selectHolidaysList = createSelector(
  selectHolidays,
  (state: IHolidayState) => state.holidays
);

export const selectHoliday = createSelector(
  selectHolidays,
  (state: IHolidayState) => state.holidayWrapper
);
