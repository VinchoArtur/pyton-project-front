import {IHoliday, IHolidayWrapper} from '../../models/holiday';

export interface IHolidayState {
  holidays: IHoliday[];
  selectHoliday: IHoliday;
  holidayWrapper: IHolidayWrapper;
}

export const initialHolidayState: IHolidayState = {
  holidays: null,
  selectHoliday: null,
  holidayWrapper: null
};
