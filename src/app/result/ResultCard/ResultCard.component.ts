import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResultModel } from '../model/result.model';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-ResultCard',
  templateUrl: './ResultCard.component.html',
  styleUrls: ['./ResultCard.component.css']
})
export class ResultCardComponent implements OnInit {

  @Input() result: ResultModel;
  @Output() clicked = new EventEmitter<ResultModel>();

  constructor(private resultService: ResultService) { }

  ngOnInit() {
  }

  seenUnseen(): void {
    this.result.isSeen ? this.resultService.unseenResult(this.result.id) : this.resultService.seenResult(this.result.id);
  }

  emitClic(): void {
    this.clicked.emit(this.result);
  }

  getCreationDate(): Date {
    return this.resultService.getDate('created', this.result);
  }
}
