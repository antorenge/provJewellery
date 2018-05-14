import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SuiModule } from 'ng2-semantic-ui';

import { Web3Service } from './services/web3.service';
import { ProductDesignService } from './services/product-design.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDesignComponent } from './product-design/product-design.component';
import { CloudService } from './services/cloud.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductDesignComponent
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
    ProductDesignService,
    CloudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
