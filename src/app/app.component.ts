import {Component, OnInit} from '@angular/core';
import {DataService} from './data/data.service';
import {AppState} from './app.redux';
import {Store} from '@ngrx/store';
import {InjectData} from 'mca-redux-domain/src/lib/src/data-repository/data-repository.actions';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private dataService: DataService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.dataService.getData()
      .pipe(
        tap(console.log),
        tap(data => this.store.dispatch(new InjectData(data)))
      ).subscribe();
  }
}
