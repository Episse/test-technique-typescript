/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './Header.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../RoutedPages/home/home.component';
import { RecapNewResultsComponent } from '../result/RecapNewResults/RecapNewResults.component';
import { ResultListComponent } from '../result/ResultList/ResultList.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ResultCardComponent } from '../result/ResultCard/ResultCard.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, HomeComponent, RecapNewResultsComponent, ResultListComponent, ResultCardComponent],
      imports: [OverlayPanelModule, AppRoutingModule, MatBadgeModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
