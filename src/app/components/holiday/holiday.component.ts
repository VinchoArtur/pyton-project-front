import { Component, OnInit } from '@angular/core';
import {IHoliday} from '../../models/holiday';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {

  value$: any = null;

  holidays: IHoliday[] = [{
    id: 1,
    name: '1'
  },
    {
      id: 2,
      name: '2'
    }];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  testRestFunction() {
    this.httpClient.get('/').subscribe(value => {
      this.value$ = value;
    })
  }
}
