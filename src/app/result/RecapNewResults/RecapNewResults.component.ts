import { Component, OnInit } from '@angular/core';
import { ResultModel } from '../model/result.model';
import { ResultService } from '../result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-RecapNewResults',
  templateUrl: './RecapNewResults.component.html',
  styleUrls: ['./RecapNewResults.component.css']
})
export class RecapNewResultsComponent implements OnInit {

  unseenResults: ResultModel[] = [];

  constructor(private resultService: ResultService, private router: Router) { }

  ngOnInit() {
    this.resultService.getAllResults().subscribe(results => {
      this.unseenResults = results.filter(result => result && (result.isSeen === false));
    });
  }

  goToResults(): void {
    this.router.navigate(['Results']);
  }

  getCursorClass(): string {
    return this.unseenResults.length > 0 ? 'cursorToClick' : '';
  }

}
