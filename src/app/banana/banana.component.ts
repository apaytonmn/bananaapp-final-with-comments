import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';import { AppState, getMyBanana } from '../app.state';
import { GetNewBanana, PeelBanana, EatBanana, InitiateTimeHop } from './state';

@Component({
    selector: 'app-banana',
    templateUrl: './banana.component.html',
    styleUrls: ['./banana.component.css']
})
export class BananaComponent implements OnInit {

    title = 'My NgRx Banana App';

    // This observable is bound to the HTML via an async pipe. This 
    // creates a subscription so the HTML will immediately relect any
    // change to the banana state.
    banana$: Observable<any>;

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
      this.newBanana();
      this.banana$ = this.store.pipe(select(getMyBanana));
    }

    newBanana() {
      // Dispatch the action that will initialize the state
      // of our banana.
      this.store.dispatch(new GetNewBanana(null));
    }

    peelBanana() {
      // Dispatch the action that will change the value of the 
      // isPeeled property.
      this.store.dispatch(new PeelBanana(null));
    }

    eatBanana() {
      // Dispatch an action with a payload. This will reduce the
      // value of the bitesRemaining property by the value passed
      // in as the payload.
      this.store.dispatch(new EatBanana(3));
    }

    timeHop() {
      // Dispatch an initating action. Since there is an effect 
      // involved in this code path, the completion action
      // will be generated in the effect code.
      this.store.dispatch(new InitiateTimeHop(null));
    }
}
