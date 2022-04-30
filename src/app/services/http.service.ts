import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {take} from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  getHttpHoliday(holidayId: number) {
    return this.httpClient.post('http://127.0.0.1:3000/holiday/getCurrentHoliday', {
      headers: {'Content-type': 'application/json'},
      body: {id: holidayId}
    }).pipe(take(1));
  }
}
