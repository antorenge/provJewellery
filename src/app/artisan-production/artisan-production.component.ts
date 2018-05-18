import { Component, OnInit } from '@angular/core';
import { ArtisanProductionService } from './services/artisan-production.service';
import { ArtisanProduction } from '../models';
import { ProvJewelleryService } from '../services/prov-jewellery.service';

@Component({
  selector: 'app-artisan-production',
  templateUrl: './artisan-production.component.html',
  styleUrls: ['./artisan-production.component.css']
})
export class ArtisanProductionComponent implements OnInit {

  productions: ArtisanProduction[] = [];

  constructor(private productionService: ArtisanProductionService,
    private provJewelleryService: ProvJewelleryService) { }

  ngOnInit() {
    this.productionService.getProductions().subscribe(data => {
      this.productions = data;
    }, error => {
      console.log(error);
    });
  }

  commitTransaction(prod: ArtisanProduction) {
    this.provJewelleryService.setProduction().subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

}
