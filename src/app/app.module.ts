import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OktaAuthModule } from '@okta/okta-angular';
import { OKTA_CONFIG } from '@okta/okta-angular';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PapelComponent } from './papel/papel.component';
import { HomeComponent } from './home/home.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

const oktaConfig = {
  issuer: 'https://{dev-420995.okta.com}/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '{0oal4et6odDRJey4W4x6}'
};

@NgModule({
  declarations: [
    AppComponent,
    PapelComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FormsModule,
    OktaAuthModule

  ],
  providers: [{
    provide: OKTA_CONFIG,
   useValue: oktaConfig }
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
