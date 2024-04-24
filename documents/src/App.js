import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DocumentListComponent } from './documentList'
import { AppComponent } from './App.component'; 
const routes = [
  { path: '', component: DocumentListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class App { }
