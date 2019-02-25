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
import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';
import { HomeComponent } from './RoutedPages/home/home.component';
import { RecapNewResultsComponent } from './result/RecapNewResults/RecapNewResults.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
   declarations: [
      AppComponent,
      ResultCardComponent,
      ResultListComponent,
      RecapNewResultsComponent,
      FooterComponent,
      HeaderComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      OverlayPanelModule,
      MatButtonModule,
      MatBadgeModule,
      StoreModule.forRoot({results: ResultsReducer}),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
