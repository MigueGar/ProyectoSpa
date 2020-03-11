import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ServiceSpaComponent } from './components/service-spa/service-spa.component';
import { ServicesSpaListComponent } from './components/services-spa-list/services-spa-list.component';
import { SpaService } from './services/spa.service';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ServiceSpaComponent,
    ServicesSpaListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
