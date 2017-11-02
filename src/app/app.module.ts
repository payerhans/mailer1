import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Mailer1Component } from './mailer1/mailer1.component';
import { DesireComponent } from './desire/desire.component';
import { Mailer1Service } from './mailer1/mailer1.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    Mailer1Component,
    DesireComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
  ],
  providers: [Mailer1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
