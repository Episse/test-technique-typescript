import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 
  goHome() {
    this.router.navigate(['']);
  }

  goAll() {
    this.router.navigate(['Results']);
  }

  goRecap() {
    this.router.navigate(['ResultsRecap']);
  }
}
