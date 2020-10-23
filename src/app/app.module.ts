import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { BangaloreComponent } from './bangalore/bangalore.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { DelhiComponent } from './delhi/delhi.component';
import { PuneComponent } from './pune/pune.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HyderabadComponent,
    BangaloreComponent,
    ChennaiComponent,
    DelhiComponent,
    PuneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }