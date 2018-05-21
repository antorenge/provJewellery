import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SuiModule } from 'ng2-semantic-ui';

import { Web3Service } from './services/web3.service';
import { VerifyService } from './services/verify.service';
import { ProvJewelleryService } from './services/prov-jewellery.service';
import { ProductDesignService } from './product-design/services/product-design.service';
import { ArtisanProductionService } from './artisan-production/services/artisan-production.service';
import { DeliveryService } from './delivery/services/delivery.service';
import { ValidationService } from './validation/services/validation.service';
import { InventoryItemService } from './inventory-item/services/inventory-item.service';
import { WipService } from './work-in-progress/services/wip.service';
import { OwnershipService } from './ownership/services/ownership.service';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDesignComponent } from './product-design/product-design.component';
import { ArtisanProductionComponent } from './artisan-production/artisan-production.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ValidationComponent } from './validation/validation.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { OwnershipComponent } from './ownership/ownership.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductDesignComponent,
    ArtisanProductionComponent,
    DeliveryComponent,
    ValidationComponent,
    WorkInProgressComponent,
    InventoryItemComponent,
    OwnershipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    SuiModule
  ],
  providers: [
    Web3Service,
    VerifyService,
    ProvJewelleryService,
    ProductDesignService,
    ArtisanProductionService,
    DeliveryService,
    ValidationService,
    InventoryItemService,
    WipService,
    OwnershipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
