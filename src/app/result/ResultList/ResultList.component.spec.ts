/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultListComponent } from './ResultList.component';
import { ResultCardComponent } from '../ResultCard/ResultCard.component';

describe('ResultListComponent', () => {
  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultListComponent, ResultCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(', if no seen result', () => {

    it('should display no ResultCardComponent', () => {
      fixture.detectChanges();
      const nbEl = fixture.debugElement.queryAll(By.css('#seenResults:target app-ResultCard')).length;
      expect(nbEl).toEqual(0);
    });

    it('should have title \'Pas d\'ancien résultat\'', () => {
      fixture.detectChanges();
      const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('#seenResults:target h3'));
      const nbTitles = debugElements.length;
      expect(nbTitles).toEqual(1);
      const label = debugElements[0].nativeElement.innerHTML.trim();
      expect(label).toBe('Pas d\'ancien résultat');
    });
  });

  describe(', if 1 seen result', () => {

    it('should display 1 ResultCardComponent', () => {
      fixture.detectChanges();
      const nbEl = fixture.debugElement.queryAll(By.css('#seenResults:target app-ResultCard')).length;
      expect(nbEl).toEqual(1);
    });

    it('should have title \'Ancien résultat :\'', () => {
      fixture.detectChanges();
      const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('#seenResults:target h3'));
      const nbTitles = debugElements.length;
      expect(nbTitles).toEqual(1);
      const label = debugElements[0].nativeElement.innerHTML.trim();
      expect(label).toBe('Ancien résultat :');
    });
  });

  describe(', if 2 seen result', () => {

    it('should display 2 ResultCardComponent', () => {
      fixture.detectChanges();
      const nbEl = fixture.debugElement.queryAll(By.css('#seenResults:target app-ResultCard')).length;
      expect(nbEl).toEqual(2);
    });

    it('should have title \'Anciens résultats : \'', () => {
      fixture.detectChanges();
      const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('#seenResults:target h3'));
      const nbTitles = debugElements.length;
      expect(nbTitles).toEqual(1);
      const label = debugElements[0].nativeElement.innerHTML.trim();
      expect(label).toBe('Anciens résultats : ');
    });
  });

  describe(', if no unseen result', () => {

    it('should display no ResultCardComponent', () => {
      fixture.detectChanges();
      const nbEl = fixture.debugElement.queryAll(By.css('#unseenResults:target app-ResultCard')).length;
      expect(nbEl).toEqual(0);
    });

    it('should have title \'Pas de nouveau résultat\'', () => {
      fixture.detectChanges();
      const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('#unseenResults:target h3'));
      const nbTitles = debugElements.length;
      expect(nbTitles).toEqual(1);
      const label = debugElements[0].nativeElement.innerHTML.trim();
      expect(label).toBe('Pas de nouveau résultat');
    });
  });

  describe(', if 1 unseen result', () => {

    it('should display 1 ResultCardComponent', () => {
      fixture.detectChanges();
      const nbEl = fixture.debugElement.queryAll(By.css('#unseenResults:target app-ResultCard')).length;
      expect(nbEl).toEqual(1);
    });

    it('should have title \'Nouveau résultat :\'', () => {
      fixture.detectChanges();
      const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('#unseenResults:target h3'));
      const nbTitles = debugElements.length;
      expect(nbTitles).toEqual(1);
      const label = debugElements[0].nativeElement.innerHTML.trim();
      expect(label).toBe('Nouveau résultat :');
    });
  });

  describe(', if 2 unseen result', () => {

    it('should display 2 ResultCardComponent', () => {
      fixture.detectChanges();
      const nbEl = fixture.debugElement.queryAll(By.css('#unseenResults:target app-ResultCard')).length;
      expect(nbEl).toEqual(2);
    });

    it('should have title \'Nouveaux résultats : \'', () => {
      fixture.detectChanges();
      const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('#unseenResults:target h3'));
      const nbTitles = debugElements.length;
      expect(nbTitles).toEqual(1);
      const label = debugElements[0].nativeElement.innerHTML.trim();
      expect(label).toBe('Nouveaux résultats : ');
    });
  });
});
