/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapNewResultsComponent } from './RecapNewResults.component';
import { StoreModule } from '@ngrx/store';
import { ResultsReducer } from 'src/app/store/reducers/results.reducers';
import { MatBadgeModule } from '@angular/material/badge';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from 'src/app/RoutedPages/home/home.component';
import { ResultListComponent } from '../ResultList/ResultList.component';
import { ResultCardComponent } from '../ResultCard/ResultCard.component';

describe('RecapNewResultsComponent', () => {
  let component: RecapNewResultsComponent;
  let fixture: ComponentFixture<RecapNewResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecapNewResultsComponent,
        HomeComponent,
        ResultListComponent,
        ResultCardComponent
      ],
      imports: [
        StoreModule.forRoot({results: ResultsReducer}),
        MatBadgeModule,
        AppRoutingModule
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapNewResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
