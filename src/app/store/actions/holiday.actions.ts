import {Action} from '@ngrx/store';
import {IHoliday} from '../../models/holiday';

export enum EHolidayActions {
  GetHoliday = '[Holiday] Get Holiday',
  GetHolidays = '[Holiday] Get Holidays',
  GetHolidaySuccess = '[Holiday] Get Holiday Success',
  GetHolidaysSuccess = '[Holiday] Get Holidays Success'
}

export class GetHoliday implements Action {
  public readonly type = EHolidayActions.GetHoliday;
}

export class GetHolidays implements Action {
  public readonly type = EHolidayActions.GetHolidays;
  constructor( public payload: IHoliday[]){}
}

export class GetHolidaySuccess implements Action {
  public readonly type = EHolidayActions.GetHolidaySuccess;
  constructor( public payload: IHoliday){}
}

export class GetHolidaysSuccess implements Action {
  public readonly type = EHolidayActions.GetHolidaysSuccess;
  constructor( public payload: IHoliday[]){}
}

export type HolidayActions = GetHoliday | GetHolidays | GetHolidaySuccess | GetHolidaysSuccess

