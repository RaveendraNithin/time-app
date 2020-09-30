import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BarComponent } from './d3-components/bar/bar.component';
import { PieComponent } from './d3-components/pie/pie.component';
import { BarHorizontalComponent } from './d3-components/bar-horizontal/bar-horizontal.component';
import { BarVerticalComponent } from './d3-components/bar-vertical/bar-vertical.component';
import { DonutComponent } from './d3-components/donut/donut.component';


@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    BarHorizontalComponent,
    BarVerticalComponent,
    DonutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
