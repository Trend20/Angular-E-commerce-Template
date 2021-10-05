import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input';
import { PagesComponent } from './pages/pages.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { NewProductsComponent } from './pages/new-products/new-products.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component:  TopBarComponent},
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule
  ],
  declarations: [
    AppComponent,
    PagesComponent,
    NewProductsComponent,
    SidebarComponent,
    TopBarComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

