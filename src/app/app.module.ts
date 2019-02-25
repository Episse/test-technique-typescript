import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ResultsReducer } from './store/reducers/results.reducers';
import { ResultCardComponent } from './result/ResultCard/ResultCard.component';
import { ResultListComponent } from './result/ResultList/ResultList.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ResultCardComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    StoreModule.forRoot({results: ResultsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
