import { Component, OnInit } from '@angular/core';
import {NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) {
  }

  ngOnInit(): void {
  }

}
