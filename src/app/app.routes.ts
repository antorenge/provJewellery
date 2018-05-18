import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { ProductDesignComponent } from './product-design/product-design.component';
import { ArtisanProductionComponent } from './artisan-production/artisan-production.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ValidationComponent } from './validation/validation.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'designs', component: ProductDesignComponent },
    { path: 'productions', component: ArtisanProductionComponent },
    { path: 'deliveries', component: DeliveryComponent },
    { path: 'validations', component: ValidationComponent },

];
