import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {take, takeUntil} from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  // ToDo тут надо будет урла твоего с бэка вкинуть и посмотреть
  getHttpHoliday(holidayId: number) {
    return this.httpClient.post('testurl', {headers: {"Content-type": "application/json", body: {id: holidayId}}}).pipe(take(1))
  }
}
