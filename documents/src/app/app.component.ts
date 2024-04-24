import {Component} from '@angular/core';
import './app.component.html';

@Component ({
    selector: 'app-root',
    // templateUrl: './app.component.html'
    template: `<h1>Project Management Dashboard.Welcome.</h1>`
})
export class AppComponent {

    constructor(){
    console.log('inside AppComponent');
    }
}