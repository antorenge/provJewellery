import { Component, OnInit } from '@angular/core';

const jwtDecode = require('jwt-decode');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJza3UiOiJBQkMxMjMifQ.KFbGaIg01qjxjCqXL_110LjRxVt2v6FC7jWG8YmUI1g';

    const decoded = jwtDecode(token);
    console.log(decoded);

  }

  selectedResult(event: any) {

  }

}
