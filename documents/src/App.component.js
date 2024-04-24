import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This is the selector used in HTML to render this component
  template: `
    <h1>Welcome to My Angular App</h1>
    <p>{{ message }}</p>
  `,
  styles: [`
    h1 {
      color: blue;
    }
  `]
})
export class AppComponent {
  message = 'Hello, Angular!'; // A sample message property for demonstration

  // Additional logic or properties can be added here if needed
}
