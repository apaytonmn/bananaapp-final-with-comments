import { Action } from '@ngrx/store';

// Constant names for our actions
export const GET_NEW_BANANA = 'Get New Banana';
export const PEEL_BANANA = 'Peel Banana';
export const EAT_BANANA = 'Eat Banana';
export const INITIATE_TIME_HOP = 'Initiate Time Hop';
export const TIME_HOP_COMPLETE = 'Time Hop Complete';

// Every action will follow the same general pattern
// Actions do not make changes to the store, they trigger either a 
// reducer (which will update the store) or an effect (which will
// perform additional processing).

// Action to get a new banana
// This action is dispatched in the banana component newBanana function
// The banana reducer listens for this action
export class GetNewBanana implements Action {  
  // All actions have a type
  readonly type: string = GET_NEW_BANANA;      
  // All actions have a payload. The payload is any  
  // data that you want to pass to the action.
  constructor(public payload: any) {           
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + GET_NEW_BANANA);
  }
}

// Action to peel banana
// This action is dispatched in the banana component peelBanana function
// The banana reducer listens for this action
export class PeelBanana implements Action { 
  readonly type: string = PEEL_BANANA;

  constructor(public payload: any) {
    console.log('ACTION ' + PEEL_BANANA);
  }
}

// Action to eat banana
// This action is dispatched in the banana component eatBanana function
// The banana reducer listens for this action
export class EatBanana implements Action {
  readonly type: string = EAT_BANANA;

  constructor(public payload: number) {
    console.log('ACTION ' + EAT_BANANA);
  }
}

// Action to initiate time hop
// This action is dispatched in the banana component timeHop function
// The banana effects listens for this action
export class InitiateTimeHop implements Action {
  readonly type: string = INITIATE_TIME_HOP;
    
  constructor(public payload: any) {
    console.log('ACTION ' + INITIATE_TIME_HOP);
  }
}

// Action to complete time hop
// This action is dispatched in banana effects
// The banana reducer listens for this action
export class TimeHopComplete implements Action {
  readonly type: string = TIME_HOP_COMPLETE;
    
  constructor(public payload: any) {
    console.log('ACTION ' + TIME_HOP_COMPLETE);
  }
}

export type BananaAction = GetNewBanana | PeelBanana | EatBanana | InitiateTimeHop | TimeHopComplete;
