import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SuiModule } from 'ng2-semantic-ui';

import { Web3Service } from './services/web3.service';
import { ProvJewelleryService } from './services/prov-jewellery.service';
import { ProductDesignService } from './product-design/services/product-design.service';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDesignComponent } from './product-design/product-design.component';
import { ArtisanProductionComponent } from './artisan-production/artisan-production.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ValidationComponent } from './validation/validation.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductDesignComponent,
    ArtisanProductionComponent,
    DeliveryComponent,
    ValidationComponent,
    WorkInProgressComponent
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
    ProvJewelleryService,
    ProductDesignService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
