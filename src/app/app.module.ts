import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppleBasketComponent } from './apple-basket/apple-basket.component';
import { AppleComponent } from './apple/apple.component';

@NgModule({
  declarations: [AppComponent, AppleBasketComponent, AppleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
