import {Component, Input, OnInit} from '@angular/core';
import {IHolidayWrapper} from '../../../../models/holiday';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-holiday-item',
  templateUrl: './holiday-item.component.html',
  styleUrls: ['./holiday-item.component.scss']
})
export class HolidayItemComponent implements OnInit {
  @Input()
  holiday: IHolidayWrapper;
  imagePath: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.holiday?.imageDescription) {
     this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.holiday.imageDescription)
    }
  }

}
