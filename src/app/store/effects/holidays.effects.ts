import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EHolidayActions, GetHolidays, GetHolidaySuccess} from '../actions/holiday.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {IAppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {selectHolidaysList} from '../selectors/holidays.selector';

@Injectable()
export class HolidayEffects {
  @Effect()
  getHolidays$ = this._actions$.pipe(
    ofType<GetHolidays>(EHolidayActions.GetHolidays),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectHolidaysList))),
    switchMap(([holidays, id ]) => {
      const selectedHoliday = holidays.filter(holiday => holiday.id === +id)[0];
      return of(new GetHolidaySuccess(selectedHoliday));
    })
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {
  }
}
