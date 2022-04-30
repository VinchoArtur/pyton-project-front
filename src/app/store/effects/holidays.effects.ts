import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EHolidayActions, GetCurrentHoliday, GetHolidays, GetHolidaySuccess, SetHolidayWrapper} from '../actions/holiday.actions';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {IAppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {selectHolidaysList} from '../selectors/holidays.selector';
import {HttpService} from '../../services/http.service';
import {IHoliday} from '../../models/holiday';

@Injectable()
export class HolidayEffects {
  @Effect()
  getHolidays$ = this._actions$.pipe(
    ofType<GetHolidays>(EHolidayActions.GetHolidays),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectHolidaysList))),
    switchMap(([holidays, id]) => {
      const selectedHoliday = holidays.filter(holiday => holiday.id === +id)[0];
      return of(new GetHolidaySuccess(selectedHoliday));
    })
  );

  @Effect()
  getCurrentHoliday$ = this._actions$.pipe(
    ofType<GetCurrentHoliday>(EHolidayActions.GetCurrentHoliday),
    switchMap(action => {
      return this.httpService.getHttpHoliday(action.payload.id);
    }),
    map(result => {
      this._store.dispatch(new SetHolidayWrapper(result as IHoliday));
    }),
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private httpService: HttpService
  ) {
  }
}
