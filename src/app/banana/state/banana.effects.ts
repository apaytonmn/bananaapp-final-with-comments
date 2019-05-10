import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { INITIATE_TIME_HOP, InitiateTimeHop, TimeHopComplete} from './banana.actions';
import { RotService } from '../../rot.service';

@Injectable()
export class BananaEffects {  constructor(private actions$: Actions, private rot: RotService) { }
  @Effect()
  public initiateTimeHop$ = this.actions$.pipe(
    // Listen for the initiate time hop action
    ofType(INITIATE_TIME_HOP),
    // Switch the context to a different type of observable
    switchMap((action: InitiateTimeHop) => 
      // Call our rot service
      this.rot.rotBanana().pipe(
        // Create the completion action, and pass in the data  
        // returned from the service as the payload
        map(color => new TimeHopComplete(color))
      ),
    ),
  );
}