import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { ResultsReducer } from './store/reducers/results.reducers';
import { ResultCardComponent } from './result/ResultCard/ResultCard.component';
import { ResultListComponent } from './result/ResultList/ResultList.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultCardComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({results: ResultsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
