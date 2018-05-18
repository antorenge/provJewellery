import { Component, OnInit } from '@angular/core';
import { WipService } from './services/wip.service';
import { WorkInProgress } from '../models';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})
export class WorkInProgressComponent implements OnInit {

  wips: WorkInProgress[] = [];

  constructor(private wipService: WipService) { }

  ngOnInit() {
    this.wipService.getWips().subscribe(data => {
      this.wips = data;
    }, error => console.log(error));
  }

  commitTransaction() {

  }

}
