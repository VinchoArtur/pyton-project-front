import {IHolidayState, initialHolidayState} from '../state/holiday.state';
import {EHolidayActions, HolidayActions} from '../actions/holiday.actions';

export const holidayReducers = (
  state = initialHolidayState,
  action: HolidayActions
): IHolidayState => {
  switch (action.type) {
    case EHolidayActions.GetHolidays:
      return {
        ...state,
        holidays: action.payload
      };
    case EHolidayActions.GetHolidaysSuccess:
      return {
        ...state,
        holidays: action.payload
      };
    case EHolidayActions.SetHolidayWrapper:
      return {
        ...state,
        holidayWrapper: action.holidayWrapper,
        isLoad: true
      };
    default : {
      return state
    }
  }
};
