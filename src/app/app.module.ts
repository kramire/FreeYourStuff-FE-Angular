import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StuffListComponent } from './components/stuff-list/stuff-list.component';
import { StuffListItemComponent } from './components/stuff-list-item/stuff-list-item.component';
import { StuffListContainerComponent } from './containers/stuff-list-container/stuff-list-container.component';
import { MapContainerComponent } from './containers/map-container/map-container.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { GOOGLE_MAPS_API_KEY } from '../config.js';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    StuffListComponent,
    StuffListItemComponent,
    StuffListContainerComponent,
    MapContainerComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAPS_API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
