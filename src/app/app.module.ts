import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TestImportModule} from 'mca-angular-module/src/lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestImportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
