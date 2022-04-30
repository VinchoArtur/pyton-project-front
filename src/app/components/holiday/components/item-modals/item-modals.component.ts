import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {GetHoliday} from '../../../../store/actions/holiday.actions';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/state/app.state';
import {selectHoliday} from '../../../../store/selectors/holidays.selector';
import {Observable} from 'rxjs';
import {IHolidayWrapper} from '../../../../models/holiday';

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
    this.store.dispatch(new GetHoliday(this.holidayId));
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
