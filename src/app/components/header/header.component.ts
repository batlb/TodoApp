import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header><h1 (click)="clickHandler()">Simple Todo App</h1></header>
  `,
  styles: [
    `
      header{
        font-size: 2em;
        color: aquamarine;
        text-align: center;
        margin-bottom:1em;
      }
    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(){
    // this.router
  }

}
