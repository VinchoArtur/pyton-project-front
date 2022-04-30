import {Component, Input, OnInit} from '@angular/core';
import {IHolidayWrapper} from '../../../../models/holiday';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {NbDialogService} from '@nebular/theme';
import {ItemModalsComponent} from '../item-modals/item-modals.component';

@Component({
  selector: 'app-holiday-item',
  templateUrl: './holiday-item.component.html',
  styleUrls: ['./holiday-item.component.scss']
})
export class HolidayItemComponent implements OnInit {
  @Input()
  holiday: IHolidayWrapper;
  imagePath: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer, private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    if (this.holiday?.imageDescription) {
      this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.holiday.imageDescription);
    }
  }

  moreInformation() {
    this.dialogService.open(ItemModalsComponent, {
      closeOnBackdropClick: false,
      context: {
        holidayId: this.holiday.id
      }
    }).onClose.subscribe(result => {
      console.log(result);
      //  ToDo need create process for save changes
    });
  }
}
