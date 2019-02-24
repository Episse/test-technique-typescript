import { TestBed, fakeAsync } from '@angular/core/testing';
import { ResultService } from './result.service';
import { ResultModel } from './model/result.model';
import { Subscription } from 'rxjs';
import { StoreModule, Store } from '@ngrx/store';
import { ResultsReducer } from '../store/reducers/results.reducers';
import { AppState } from '../store/app.state';
import { map, tap } from 'rxjs/operators';


describe('ResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({results: ResultsReducer})
    ]
}).compileComponents());

  let resultService: ResultService;
  let store: Store<AppState>;


  it('should be created', () => {
    resultService = TestBed.get(ResultService);
    expect(resultService).toBeTruthy();
  });


  /* step 1 : initialisation du projet avec 0 et 1 resultat */
  it('devrait être initialisé avec une liste de résultat vide',
    fakeAsync(() => {
      let res: ResultModel[];
      const idSub = resultService.getAllResult().subscribe(results => res = results);
      expect(res).toEqual([]);
      idSub.unsubscribe();
    })
  );

  describe('aprés l\'ajout d\'un résultat,', () => {
    let allResults: ResultModel[];
    let allSeenResults: ResultModel[];
    let allUnseenResults: ResultModel[];
    let idSub: Subscription;
    const existingId = 46;

    beforeEach(() => {
      store = TestBed.get(Store);
      resultService = new ResultService(store);
      idSub = resultService.getAllResult().subscribe(results => {
          allResults = results;
          allSeenResults = results.filter(res => res.isSeen);
          allUnseenResults = results.filter(res => res && !res.isSeen);
          console.log('subscription', allResults, allSeenResults, allUnseenResults);
        }
      );
      const result: ResultModel = {id: existingId, idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test'};
      resultService.addResult(result);
    });

    afterEach(() => {
      idSub.unsubscribe();
    });

    it('devrait avoir une liste de 1 résultat non vu',
      fakeAsync(() => {
        expect(allResults.length).toEqual(1);
      })
    );

    it('devrait avoir une liste de 1 résultat vue aprés la vision de ce résultat',
      fakeAsync(() => {
        resultService.seenResult(46);
        expect(allSeenResults.length).toEqual(1);
        expect(allResults[0].isSeen).toEqual(true);
      })
    );
  });

  /* step 2 : 3 resultats */
  describe('aprés l\'ajout de 3 resultats,', () => {

    const existingIds = [46, 47, 48];
    const missingId = 22;
    let idSub: Subscription;
    let allResults: ResultModel[];
    let allSeenResults: ResultModel[];
    let allUnseenResults: ResultModel[];

    beforeEach(() => {
      // init le service avec 3 resultats
      store = TestBed.get(Store);
      resultService = new ResultService(store);

      idSub = resultService.getAllResult().subscribe(results => {
          allResults = results;
          allSeenResults = results.filter(res => res.isSeen);
          allUnseenResults = results.filter(res => res && !res.isSeen);
        }
      );

      resultService.addResult({id: existingIds[0], idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test46'});
      resultService.addResult({id: existingIds[1], idOwner: 75, idRecipients: [34], isSeen: false, eventResults: [], contentOfResult: 'Test47'});
      resultService.addResult({id: existingIds[2], idOwner: 76, idRecipients: [55], isSeen: false, eventResults: [], contentOfResult: 'Test48'});
    });

    afterEach(() => {
      idSub.unsubscribe();
    });

    it('devrait avoir une liste de 3 resultats non vu aprés l\'ajout de 3 resultats.',
      fakeAsync(() => {
        expect(allUnseenResults.length).toEqual(3);
      })
    );

    it('ne devrait pas autoriser l\'ajout d\'un résultat avec un id existant',
      fakeAsync(() => {
        const previousLenth = allResults.length;
        resultService.addResult({id: existingIds[0], idOwner: 4, idRecipients: [32], isSeen: false, eventResults: [], contentOfResult: 'Test'});
        expect(allResults.length).toEqual(previousLenth);
      })
    );

    it('devrait avoir 1 resultat vu dans la liste aprés la vision d\'un resultat',
      fakeAsync(() => {
        resultService.seenResult(existingIds[1]);
        expect(allSeenResults.length).toEqual(1);
      })
    );

    it('devrait avoir les 3 resultats vus dans la liste aprés qu\'ils soient tous vus',
      fakeAsync(() => {
        allResults.map(result => resultService.seenResult(result.id));
        expect(allSeenResults.length).toEqual(3);
      })
    );

    it('devrait avoir plus que 2 resultats vus dans la liste aprés qu\'ils soient tous vus puis 1 ou la vue est enlevée',
      fakeAsync(() => {
        allResults.map(result => resultService.seenResult(result.id));
        resultService.unseenResult(existingIds[1]);
        expect(allSeenResults.length).toEqual(2);
      })
    );

    it('ne devrait pas planter aprés la vision d\'un resultat non ajouté',
      fakeAsync(() => {
        spyOn(resultService, 'seenResult');
        resultService.seenResult(missingId);
        expect(resultService.seenResult).toHaveBeenCalled();
      })
    );
  });


  /* step 3 (evenement) */
  describe(',aprés l\'ajout de 3 resultats,', () => {

    const existingIds = [46, 47, 48];
    let idSub: Subscription;
    let allResults: ResultModel[];
    let allSeenResults: ResultModel[];
    let allUnseenResults: ResultModel[];
    let allOrderedResults: ResultModel[];

    beforeEach(fakeAsync(() => {
      store = TestBed.get(Store);
      resultService = new ResultService(store);

      idSub = resultService.getAllResult().subscribe(results => {
          allResults = results;
          allSeenResults = results.filter(res => res.isSeen);
          allUnseenResults = results.filter(res => res && !res.isSeen);
        }
      );

      resultService.addResult({id: existingIds[0], idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test46'});
      jasmine.clock().tick(2);
      resultService.addResult({id: existingIds[1], idOwner: 75, idRecipients: [34], isSeen: false, eventResults: [], contentOfResult: 'Test47'});
      jasmine.clock().tick(2);
      resultService.addResult({id: existingIds[2], idOwner: 76, idRecipients: [55], isSeen: false, eventResults: [], contentOfResult: 'Test48'});
    }));

    afterEach(() => {
      idSub.unsubscribe();
    });

    // ps : je ne veux pas que les events de création soient initialisés dans le beforeEach ci dessus mais directement dans le resultService
    it('devrait avoir la liste des résultats dans l\'ordre de création (en se basant sur les events de création)',
      fakeAsync(() => {
        const date1 = resultService.getDate('created', allResults[0]);
        const date2 = resultService.getDate('created', allResults[1]);
        const date3 = resultService.getDate('created', allResults[2]);
        expect(date1.valueOf()).toBeLessThan(date2.valueOf());
        expect(date2.valueOf()).toBeLessThan(date3.valueOf());
      })
    );

    it('devrait avoir 1 event a la date de maintenant quand 1 résultat est vu',
      fakeAsync(() => {
        const dateNow = new Date();
        resultService.seenResult(existingIds[1]);
        expect(allResults.find(result => (result.eventResults.find(eventRes => eventRes.createdAt.getTime() === dateNow.getTime()) !== undefined))).toBeDefined();
      })
    );

    it('devrait avoir 2 events avec 2 dates différentes aprés la vision d\'un resultat puis la suppression de la vision',
      fakeAsync(() => {
        jasmine.clock().tick(2);
        const idResultToChange = existingIds[1];
        resultService.seenResult(idResultToChange);
        resultService.unseenResult(idResultToChange);
        const eventResults = allResults.find(result => result.id === idResultToChange).eventResults;
        expect(eventResults.length).toEqual(2);
        expect(eventResults[0].createdAt.getTime()).not.toEqual(eventResults[1].createdAt.getTime());
      })
    );

    it('devrait avoir une fonction qui retourne une liste ordonnée des resultats par rapport au dernier modifié',
      fakeAsync(() => {
        jasmine.clock().tick(2);

        const idResultToSee = existingIds[2];
        resultService.seenResult(idResultToSee);

        resultService.getOrderedAllResult().subscribe(
          orderedResults => allOrderedResults = orderedResults
        );
        expect(allOrderedResults[0].id).toEqual(idResultToSee);
        expect(resultService.getLastEvent(allOrderedResults[0]).createdAt.getTime()).toBeGreaterThan(resultService.getLastEvent(allOrderedResults[1]).createdAt.getTime());
        expect(resultService.getLastEvent(allOrderedResults[1]).createdAt.getTime()).toBeGreaterThan(resultService.getLastEvent(allOrderedResults[2]).createdAt.getTime());
      })
    );

  });


  /* proposé de nouveaux tests */

});
