import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { ProductDesignComponent } from './product-design/product-design.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductDesignComponent },

];
