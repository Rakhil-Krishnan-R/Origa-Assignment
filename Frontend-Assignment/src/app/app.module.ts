import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { DataFetchService } from './service/data-fetch.service';

import { HttpClientModule } from '@angular/common/http';
// import { AccumulationChartModule, PieSeriesService } from '@syncfusion/ej2-angular-charts'
import { AccumulationChartModule, AccumulationDataLabelService, PieSeriesService, AccumulationLegendService } from '@syncfusion/ej2-angular-charts'


@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccumulationChartModule
  ],
  providers: [DataFetchService, PieSeriesService, AccumulationDataLabelService, AccumulationLegendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
