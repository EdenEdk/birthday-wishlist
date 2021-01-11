import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { APP_COMPONENTS } from './components/component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [...APP_COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
