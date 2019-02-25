import { Component, ViewChild, EventEmitter } from '@angular/core';
import { ResultCardComponent } from './ResultCard.component';
import { ResultModel } from '../model/result.model';

@Component({
    selector: 'app-parent',
    template: `<app-ResultCard [result]="result" (clicked)="doAction($event)"></app-ResultCard>`
})
export class MockResultCardParentComponent {
    @ViewChild(ResultCardComponent) child;
    result: ResultModel = {id: 46, idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test46'};
    clicked = evt => {};

    doAction(event: ResultModel): void {}
}
