import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EHolidayActions, GetHoliday, GetHolidays, GetHolidaySuccess, SetHolidayWrapped} from '../actions/holiday.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {IAppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {selectHolidaysList} from '../selectors/holidays.selector';
import {HttpService} from '../../services/http.service';
import {IHolidayWrapper} from '../../models/holiday';
import {RouterAction} from '@ngrx/router-store';

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
  getHoliday$ = this._actions$.pipe(
    ofType<GetHoliday>(EHolidayActions.GetHoliday),
    switchMap(action => {return of(this.httpService.getHttpHoliday(action.holidayId))}),
    map(holiday => {
      holiday.subscribe(value => {
        return this._store.dispatch(new SetHolidayWrapped(value as IHolidayWrapper))
      }).unsubscribe();
    })
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private httpService: HttpService
  ) {
  }
}
