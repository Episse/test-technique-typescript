import { TestBed, fakeAsync } from '@angular/core/testing';
import { ResultService } from './result.service';
import { ResultModel } from './model/result.model';

describe('ResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  let resultService: ResultService;

  it('should be created', () => {
    resultService = TestBed.get(ResultService);
    expect(resultService).toBeTruthy();
  });


  /* step 1 : initialisation du projet avec 0 et 1 resultat */
  it('devrait être initialisé avec une liste de résultat vide',
    fakeAsync(() => {
      expect(resultService.getAllResult()).toEqual([]);
    })
  );

  describe('aprés l\'ajout d\'un résultat,', () => {
    beforeEach(() => {
      const result: ResultModel = {id: 46, idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test'};
      resultService = new ResultService();
      resultService.addResult(result);
    });

    it('devrait avoir une liste de 1 résultat non vu',
      fakeAsync(() => {
        expect(resultService.getAllResult().length).toEqual(1);
      })
    );

    it('devrait avoir une liste de 1 résultat vue aprés la vision de ce résultat',
      fakeAsync(() => {
        resultService.seenResult(46);
        expect(resultService.getAllResultSeen().length).toEqual(1);
        expect(resultService.getAllResult()[1].isSeen).toEqual(true);
      })
    );
  });

  /* step 2 : 3 resultats */
  describe('aprés l\'ajout de 3 resultats,', () => {

    beforeEach(() => {
      // init le service avec 3 resultats
    });

    it('devrait avoir une liste de 3 resultats non vu aprés l\'ajout de 3 resultats.',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('ne devrait pas autoriser l\'ajout d\'un résultat avec un id existant',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('devrait avoir 1 resultat vu dans la liste aprés la vision d\'un resultat',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('devrait avoir les 3 resultats vus dans la liste aprés qu\'ils soient tous vus',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('devrait avoir plus que 2 resultats vus dans la liste aprés qu\'ils soient tous vus puis 1 ou la vue est enlevée',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('ne devrait pas planter aprés la vision d\'un resultat non ajouté',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );
  });


  /* step 3 (evenement) */
  describe(',aprés l\'ajout de 3 resultats,', () => {

    beforeEach(() => {
      // init le service avec 3 resultats (doit etre identique que le step 2)
    });

    // ps : je ne veux pas que les events de création soient initialisés dans le beforeEach ci dessus mais directement dans le resultService
    it('devrait avoir la liste des résultats dans l\'ordre de création (en se basant sur les events de création)',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('devrait avoir 1 event a la date de maintenant quand 1 résultat est vu',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('devrait avoir 2 events avec 2 dates différentes aprés la vision d\'un resultat puis la suppression de la vision',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('devrait avoir une fonction qui retourne une liste ordonnée des resultats par rapport au dernier modifié',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

  });


  /* proposé de nouveaux tests */

});
