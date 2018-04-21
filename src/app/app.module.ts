import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TestImportModule} from 'mca-angular-module/src/lib';
import {DataService} from './data/data.service';
import {StoreModule} from '@ngrx/store';
import {domainReducers} from 'mca-redux-domain/src/lib';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestImportModule,
    StoreModule.forRoot({...domainReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
