import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({providedIn: 'root'})
export class RotService {
  rotBanana(): Observable<any> {
    console.log('ROT BANANA');
    const milliseconds = 10000; // 10 seconds
    return Observable.create(observer => {
      setTimeout(() => {
        console.log('Done waiting');
        observer.next('brown');
        observer.complete();
      }, milliseconds);
    });
  }
}