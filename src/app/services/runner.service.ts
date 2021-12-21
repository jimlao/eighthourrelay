import { Injectable } from '@angular/core';
import { IRunner, Runner } from '../models/runner';
//import { firebase } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class RunnerService {

  constructor() { }

  getRunner(user: firebase.User | null): IRunner | null {
    if (!user)
      return null;
    
    let runner = new Runner(user);
    return runner;
  }
}
