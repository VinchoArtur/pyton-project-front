import {IHoliday, IHolidayWrapper} from '../../models/holiday';

export interface IHolidayState {
  holidays: IHoliday[];
  selectHoliday: IHoliday;
  holidayWrapper: IHolidayWrapper;
  isLoad: Boolean
}

export const initialHolidayState: IHolidayState = {
  holidays: null,
  selectHoliday: null,
  holidayWrapper: null,
  isLoad: false,
};
