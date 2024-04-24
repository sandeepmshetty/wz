import { Component } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'document-list',
  template: `
    <button (click)="handleClick()">Click Me!</button>
    <div>You have {{ count }} items in your cart</div>
  `
})
export class DocumentListComponent {
  count = faker.random.number();

  handleClick() {
    alert('Button clicked!');
  }
}