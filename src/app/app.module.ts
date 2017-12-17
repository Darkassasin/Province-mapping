import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProvinceComponent } from './province/province.component';
import { provinceservice } from './province/province.service';

@NgModule({
  declarations: [
    AppComponent,
    ProvinceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [provinceservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
