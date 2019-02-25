import { Component, OnInit } from '@angular/core';
import { ResultModel } from '../model/result.model';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-ResultList',
  templateUrl: './ResultList.component.html',
  styleUrls: ['./ResultList.component.css']
})
export class ResultListComponent implements OnInit {

  results: ResultModel[] = [];
  sresults: ResultModel[] = [];
  usresults: ResultModel[] = [];

  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.resultService.getAllResults().subscribe(results => {
      this.results = results;
      this.sresults = results.filter(result => result && (result.isSeen === true));
      this.usresults = results.filter(result => result && (result.isSeen === false));
    });
  }

}
