import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/state/app.state';
import {selectHoliday} from '../../../../store/selectors/holidays.selector';
import {Observable} from 'rxjs';
import {IHolidayWrapper} from '../../../../models/holiday';
import {GetCurrentHoliday} from '../../../../store/actions/holiday.actions';

@Component({
  selector: 'app-item-modals',
  templateUrl: './item-modals.component.html',
  styleUrls: ['./item-modals.component.scss']
})
export class ItemModalsComponent implements OnInit, AfterViewInit {

  holidayId: number = 1;
  iHolidayWrapperObservable: Observable<IHolidayWrapper>;

  constructor(private dialogRef: NbDialogRef<ItemModalsComponent>, private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetCurrentHoliday({id: this.holidayId, name: 'name'}));
     this.iHolidayWrapperObservable = this.store.select(selectHoliday);
  }

  close() {
    this.dialogRef.close({
      test: 1
    });
  }

  ngAfterViewInit(): void {
  }

}
