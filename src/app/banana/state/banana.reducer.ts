import { GET_NEW_BANANA, PEEL_BANANA, EAT_BANANA, TIME_HOP_COMPLETE } from './banana.actions';
import * as programActions from './banana.actions';

// Reducers are the only entity in the pattern where the store should 
// be updated. 
// The store is immutable, so the reducer uses the spread operator to get
// a new copy of the state (...state), makes changes to the new copy, 
// then returns the new version.
// The reducer is structured as a switch statement, with each case handling
// a different action.
// When an effect is involved, the reducer typically only needs to listen
// for the completion action (not the initiating action) because the store 
// will be updated based on processing that occurred in the effect.
export function reducer(state: any, action: programActions.BananaAction): any {
  switch (action.type) {            // Switch on the action type
    case GET_NEW_BANANA: {          // Handle get new banana action
      console.log('REDUCER ' + GET_NEW_BANANA);
      return {
        isPeeled: false,            // For our new banana we need to initialize
        bitesRemaining: 9,          // all properties of the banana
        color: 'yellow'
      };
    }
    case PEEL_BANANA: {             // Handle peel banana action
      console.log('REDUCER ' + PEEL_BANANA);
      return {
        ...state,                   // Get a new copy of the state
        isPeeled: true              // Update the isPeeled property
      };
    }
    case EAT_BANANA: {              // Handle eat banana action
      console.log('REDUCER: Taking ' + action.payload + ' bites of the banana')
      return {
        ...state,                   // Get a new copy of the state
        // Update the bitesRemaining property, reducing by the number
        // of bites passed in when the action was dispatched
        bitesRemaining: (state.bitesRemaining - action.payload)
      };
    }
    case TIME_HOP_COMPLETE: {       // Handle time hop complete action
      console.log('REDUCER: Time hop complete')
      return {
        ...state,                   // Get a new copy of the state
        color: action.payload       // Update the color property
      }
    }
    default: {                      // Handle default
      return {
        ...state                    // Return the current state
      };
    }
  }
}