import {Injectable} from '@angular/core';
import {Block, BoxWall} from 'mca-redux-domain/src/lib/src/definitions';
import {DataRepositoryState} from 'mca-redux-domain/src/lib/src/data-repository/data-repository.reducer';
import {BLOCKS, BOX_WALLS} from './data.constants';
import {timer} from 'rxjs/observable/timer';
import {Observable} from 'rxjs/Observable';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {map, mapTo} from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor() {
  }

  public getData(): Observable<DataRepositoryState> {
    return combineLatest(
      this.getBoxWalls(),
      this.getBlocks()
    ).pipe(
      map(([boxWalls, blocks]) => ({boxWalls, blocks}))
    );
  }

  private getBoxWalls(): Observable<BoxWall[]> {
    return timer(500).pipe(
      mapTo(BOX_WALLS)
    );
  }

  private getBlocks(): Observable<Block[]> {
    return timer(1000).pipe(
      mapTo(BLOCKS)
    );
  }
}
