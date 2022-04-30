import {Action} from '@ngrx/store';
import {IHoliday, IHolidayWrapper} from '../../models/holiday';

export enum EHolidayActions {
  GetHoliday = '[GetHoliday] Get Holiday',
  GetHolidays = '[GetHolidays] Get Holidays',
  GetHolidaySuccess = '[GetHolidaySuccess] Get Holiday Success',
  GetHolidaysSuccess = '[GetHolidaysSuccess] Get Holidays Success',
  SetHolidayWrapped = '[SetHolidayWrapped] Set Holiday Wrapper'
}

export class GetHoliday implements Action {
  public readonly type = EHolidayActions.GetHoliday;

  constructor(public holidayId: number) {
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

export class SetHolidayWrapped implements Action {
  public readonly type = EHolidayActions.SetHolidayWrapped;
  constructor(public holidayWrapper: IHolidayWrapper) {
  }
}

export type HolidayActions = GetHoliday | GetHolidays | GetHolidaySuccess | GetHolidaysSuccess | SetHolidayWrapped

