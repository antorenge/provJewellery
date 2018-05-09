import { Component, NgZone } from '@angular/core';
import { Web3Service } from './services/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  account: any;
  accounts: any;

  constructor(private _ngZone: NgZone, private web3Service: Web3Service) {
    this.onReady();
  }

  onReady = () => {
    this.web3Service.getAccounts().subscribe(accs => {
      this.accounts = accs;
      this.account = this.accounts[0];

      // this._ngZone.run(() => )
    }, error => console.log(error));
  }
}
