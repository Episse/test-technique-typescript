import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/result/result.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private resultService: ResultService) { }

  ngOnInit() {
  }

  initResults() {
    this.resultService.addResult({id: 46, idOwner: 76, idRecipients: [42], isSeen: false, eventResults: [], contentOfResult: 'Test46'});
    this.resultService.addResult({id: 47, idOwner: 75, idRecipients: [34], isSeen: false, eventResults: [], contentOfResult: 'Test47'});
    this.resultService.addResult({id: 48, idOwner: 76, idRecipients: [55], isSeen: false, eventResults: [], contentOfResult: 'Test48'});
  }

  getNbResults(): number {
    let nb: number;
    this.resultService.getAllResults().subscribe( results => nb = results.length);
    return  nb;
  }
}
