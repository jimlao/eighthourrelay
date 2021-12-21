import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { IRunner, Runner } from '../models/runner';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public static currentRunner: BehaviorSubject<IRunner | null> = new BehaviorSubject<IRunner | null>(null);

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.user.subscribe(result=>{
      if (result) {
        let runner = result ? new Runner(result) : null;
        AppStateService.currentRunner.next(runner);
      }
     });   
  }
}
