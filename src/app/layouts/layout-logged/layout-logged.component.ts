import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-logged',
  templateUrl: './layout-logged.component.html',
  styleUrls: ['./layout-logged.component.scss']
})
export class LayoutLoggedComponent implements OnInit {
  user: string = '';
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(<string>localStorage.getItem('user')).user;
  }

}
