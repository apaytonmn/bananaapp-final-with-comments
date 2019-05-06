import { Action } from '@ngrx/store';

export const GET_NEW_BANANA = 'Get New Banana';
export const PEEL_BANANA = 'Peel Banana';
export const EAT_BANANA = 'Eat Banana';
export const INITIATE_TIME_HOP = 'Initiate Time Hop';
export const TIME_HOP_COMPLETE = 'Time Hop Complete';

export class GetNewBanana implements Action {  
  readonly type: string = GET_NEW_BANANA;

  constructor(public payload: any) {
    console.log('ACTION ' + GET_NEW_BANANA);
  }
}

export class PeelBanana implements Action { 
  readonly type: string = PEEL_BANANA;

  constructor(public payload: any) {
    console.log('ACTION ' + PEEL_BANANA);
  }
}

export class EatBanana implements Action {
  readonly type: string = EAT_BANANA;

  constructor(public payload: number) {
    console.log('ACTION ' + EAT_BANANA);
  }
}

export class InitiateTimeHop implements Action {
  readonly type: string = INITIATE_TIME_HOP;
    
  constructor(public payload: any) {
    console.log('ACTION ' + INITIATE_TIME_HOP);
  }
}

export class TimeHopComplete implements Action {
  readonly type: string = TIME_HOP_COMPLETE;
    
  constructor(public payload: any) {
    console.log('ACTION ' + TIME_HOP_COMPLETE);
  }
}

export type BananaAction = GetNewBanana | PeelBanana | EatBanana | InitiateTimeHop | TimeHopComplete;
