import {Action} from '@ngrx/store';
import {IHoliday, IHolidayWrapper} from '../../models/holiday';

export enum EHolidayActions {
  GetCurrentHoliday = '[GetCurrentHoliday] Get current holiday',
  GetHolidays = '[GetHolidays] Get Holidays',
  GetHolidaySuccess = '[GetHolidaySuccess] Get Holiday Success',
  GetHolidaysSuccess = '[GetHolidaysSuccess] Get Holidays Success',
  SetHolidayWrapper = '[SetHolidayWrapper] Set Holiday Wrapper'
}

export class GetCurrentHoliday implements Action {
  public readonly type = EHolidayActions.GetCurrentHoliday;
  constructor(public payload: IHoliday) {
  }
}

export class GetHolidays implements Action {
  public readonly type = EHolidayActions.GetHolidays;

  constructor(public payload: IHoliday[]) {
  }
}

export class GetHolidaySuccess implements Action {
  public readonly type = EHolidayActions.GetHolidaySuccess;

  constructor(public payload: IHoliday) {
  }
}

export class GetHolidaysSuccess implements Action {
  public readonly type = EHolidayActions.GetHolidaysSuccess;

  constructor(public payload: IHoliday[]) {
  }
}

export class SetHolidayWrapper implements Action {
  public readonly type = EHolidayActions.SetHolidayWrapper;
  constructor(public holidayWrapper: IHoliday) {
  }
}

export type HolidayActions = GetCurrentHoliday | GetHolidays | GetHolidaySuccess | GetHolidaysSuccess | SetHolidayWrapper

