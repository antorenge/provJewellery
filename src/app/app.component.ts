import { Component, NgZone } from '@angular/core';
import { Web3Service } from './services/web3.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'provJewellery';

  constructor() { }

}
