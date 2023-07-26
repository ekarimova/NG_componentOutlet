import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CardsOutletComponent, DATA} from './cards-outlet/cards-outlet.component';
import { RedCardComponent } from './cards-outlet/red-card/red-card.component';
import { BlueCardComponent } from './cards-outlet/blue-card/blue-card.component';
import { GreenCardComponent } from './cards-outlet/green-card/green-card.component';
import {YellowCardComponent} from "./cards-outlet/yellow-card/yellow-card.component";

@NgModule({
  declarations: [
    AppComponent,
    CardsOutletComponent,
    RedCardComponent,
    BlueCardComponent,
    GreenCardComponent,
    YellowCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: DATA, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
