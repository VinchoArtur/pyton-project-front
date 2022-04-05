import {IHoliday} from '../../models/holiday';

export interface IHolidayState {
  holidays: IHoliday[];
  selectHoliday: IHoliday;
}

export const initialHolidayState: IHolidayState = {
  holidays: null,
  selectHoliday: null
};
