/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultCardComponent } from './ResultCard.component';
import { MockResultCardParentComponent } from './ResultCardMockParent.component';

describe('MockResultCardParentComponent', () => {
  let component: MockResultCardParentComponent;
  let fixture: ComponentFixture<MockResultCardParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultCardComponent, MockResultCardParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockResultCardParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display one ResultCardComponent', () => {
    fixture.detectChanges();
    const nbEl = fixture.debugElement.queryAll(By.css('app-ResultCard')).length;
    expect(nbEl).toEqual(1);
  });

  it('should read the Input value', () => {
    fixture.detectChanges();
    expect(component.child.result).toEqual(component.result);
  });

  it('should send the event', () => {
    spyOn(component, 'doAction');
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('app-ResultCard'));
    el.nativeElement.click();
    expect(component.doAction).toHaveBeenCalledWith('clicked');
});
});
