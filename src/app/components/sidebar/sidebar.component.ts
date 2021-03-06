import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Holiday',
      link: 'holiday',
    },
    {
      title: 'About',
      link: 'about'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
