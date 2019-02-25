/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultListComponent } from './ResultList.component';
import { ResultCardComponent } from '../ResultCard/ResultCard.component';
import { StoreModule, Store } from '@ngrx/store';
import { ResultService } from '../result.service';
import { ResultsReducer } from '../../store/reducers/results.reducers';
import { AppState } from 'src/app/store/app.state';
import { ResultModel } from '../model/result.model';
import { Subscription } from 'rxjs';

describe('ResultListComponent', () => {
  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;
  let de: DebugElement ;
  let resultService: ResultService;
  let store: Store<AppState>;
  let seenResults;
  let seenH3Nodes;
  let unseenResults;
  let unseenH3Nodes;
  let idSub: Subscription;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultListComponent, ResultCardComponent ],
      imports: [
        StoreModule.forRoot({ResultsReducer})
      ],
      providers: [
        ResultService
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ResultListComponent);
    component = fixture.componentInstance;
    /*store = TestBed.get(Store);
    resultService = new ResultService(store);
    idSub = resultService.getAllResults().subscribe(results => {
      component.results = results;
      component.sresults = results.filter(res => res.isSeen);
      component.usresults = results.filter(res => res && !res.isSeen);
    });*/
  });

  /*beforeEach(async(() => {
    fixture.detectChanges();
    de = fixture.debugElement;
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    resultService = new ResultService(store);

    const el: HTMLElement = de.nativeElement;
    seenResults = el.querySelectorAll('#seenResults app-ResultCard');
    seenH3Nodes = el.querySelectorAll('#seenResults h3');
    unseenResults = el.querySelectorAll('#unseenResults app-ResultCard');
    unseenH3Nodes = el.querySelectorAll('#unseenResults h3');
  }));

  afterEach(() => {
    fixture.destroy();
  });*/

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 /* describe(', sans aucun résultat,', () => {

    beforeEach(() => {
      idSub = resultService.getAllResults().subscribe(results => {
        component.results = results;
        component.sresults = results.filter(res => res.isSeen);
        component.usresults = results.filter(res => res && !res.isSeen);
      });
    });
    afterEach(() => {
      idSub.unsubscribe();
    });
    it('should display no seen result', () => {
      expect(seenResults.length).toEqual(0);
    });

    it('should have title \'Pas d\'ancien résultat\'', () => {
      expect(seenH3Nodes).toBeDefined();
      expect(seenH3Nodes.length).toEqual(1);
      if (seenH3Nodes.length > 0) {
        const label = seenH3Nodes[0].innerHTML.trim();
        expect(label).toMatch('Pas d\'ancien résultat');
      }
    });

    it('should display no unseen result', () => {
      expect(unseenResults.length).toEqual(0);
    });

    it('should have title \'Pas de nouveau résultat\'', () => {
      expect(unseenH3Nodes).toBeDefined();
      expect(unseenH3Nodes.length).toEqual(1);
      if (unseenH3Nodes.length > 0) {
        const label = unseenH3Nodes[0].innerHTML.trim();
        console.log(label);
        expect(label).toMatch('Pas de nouveau résultat');
      }
    });
  });

  describe(', après avoir ajouté 2 résultats, et visionné un des deux,', () => {
    const existingIds = [46, 47];
    beforeEach(() => {
      fixture.detectChanges();

      const el: HTMLElement = de.nativeElement;
      seenResults = el.querySelectorAll('#seenResults app-ResultCard');
      seenH3Nodes = el.querySelectorAll('#seenResults h3');
      unseenResults = el.querySelectorAll('#unseenResults app-ResultCard');
      unseenH3Nodes = el.querySelectorAll('#unseenResults h3');
      resultService.addResult({id: existingIds[0], idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test'});
      resultService.addResult({id: existingIds[1], idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test'});
      resultService.seenResult(existingIds[1]);
    });

    it('should display 1 seen result', () => {
      expect(seenResults.length).toEqual(1);
    });

    it('should have title \'Ancien résultat :\'', () => {
      expect(seenH3Nodes).toBeDefined();
      expect(seenH3Nodes.length).toEqual(1);
      if (seenH3Nodes.length > 0) {
        const label = seenH3Nodes[0].innerHTML.trim();
        expect(label).toMatch('Ancien résultat :');
      }
    });

    it('should display 1 seen result', () => {
      expect(unseenResults.length).toEqual(1);
    });

    it('should have title \'Nouveau résultat :\'', () => {
      expect(unseenH3Nodes).toBeDefined();
      expect(unseenH3Nodes.length).toEqual(1);
      if (unseenH3Nodes.length > 0) {
        const label = unseenH3Nodes[0].innerHTML.trim();
        console.log(label);
        expect(label).toMatch('Nouveau résultat :');
      }
    });
  });

  describe(', après avoir ajouter 4 résultats, et visionné 2 des 4,', () => {
    const existingIds = [46, 47, 48, 49];

    beforeEach(() => {
      fixture.detectChanges();

      const el: HTMLElement = de.nativeElement;
      seenResults = el.querySelectorAll('#seenResults app-ResultCard');
      seenH3Nodes = el.querySelectorAll('#seenResults h3');
      unseenResults = el.querySelectorAll('#unseenResults app-ResultCard');
      unseenH3Nodes = el.querySelectorAll('#unseenResults h3');
      resultService.addResult({id: existingIds[0], idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test'});
      resultService.addResult({id: existingIds[1], idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test'});
      resultService.addResult({id: existingIds[2], idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test'});
      resultService.addResult({id: existingIds[3], idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test'});
      resultService.seenResult(existingIds[1]);
      resultService.seenResult(existingIds[3]);
    });

    it('should display 2 seen result', () => {
      expect(seenResults.length).toEqual(2);
    });

    it('should have title \'Anciens résultats : \'', () => {
      expect(seenH3Nodes).toBeDefined();
      expect(seenH3Nodes.length).toEqual(1);
      if (seenH3Nodes.length > 0) {
        const label = seenH3Nodes[0].innerHTML.trim();
        expect(label).toMatch('Anciens résultats : ');
      }
    });

    it('should display 2 unseen result', () => {
      expect(unseenResults.length).toEqual(2);
    });

    it('should have title \'Nouveaux résultats : \'', () => {
      expect(unseenH3Nodes).toBeDefined();
      expect(unseenH3Nodes.length).toEqual(1);
      if (unseenH3Nodes.length > 0) {
        const label = unseenH3Nodes[0].innerHTML.trim();
        console.log(label);
        expect(label).toMatch('Nouveaux résultats :');
      }
    });
  });*/
});
