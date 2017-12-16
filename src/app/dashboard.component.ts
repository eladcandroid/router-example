import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<h1>Dashboard Component</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class DashboardComponent implements OnInit  {

  constructor(private router: Router) {

  }
  ngOnInit() {
    // Try to auto navigate after 3 seconds
    // setTimeout(() => {
    //   this.autoRedirect();
    // }, 2000);
  }
  autoRedirect() {
    this.router.navigate(['users']);
  }

}
