import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-lib',
  template: `
    <p>
      ui-lib works!
      <button mat-raised-button>Hello world</button>
    </p>
  `,
  styles: []
})
export class UiLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
