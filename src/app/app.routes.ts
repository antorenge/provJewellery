import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ProductProfileComponent } from './product-profile/product-profile.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductProfileComponent },

];
