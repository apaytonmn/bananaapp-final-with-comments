// Service to "rot" the banana
// This service waits for 10 seconds, then returns the 
// work 'brown' to indicate the color of our old banana
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Set up injectable as providedIn root so we don't have to create a providers 
// list in app.module.ts
@Injectable({providedIn: 'root'})     
export class RotService {
  rotBanana(): Observable<any> {
    console.log('ROT BANANA');
    const milliseconds = 10000;       // 10 seconds
    return Observable.create(observer => {
      setTimeout(() => {              // Set up the timeout
        console.log('Done waiting');  // Log when the timeout completes
        observer.next('brown');       // Pass the color of our old banana back in the observable
        observer.complete();          // The color is the only data we are sending, so complete
      }, milliseconds);               // Value for the timeout
    });
  }
}