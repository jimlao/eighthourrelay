import { Injectable } from '@angular/core';
import { IRunner, Runner } from '../models/IRunner';

@Injectable({
  providedIn: 'root'
})
export class RunnerService {

  constructor() { }

  getRunner(email: string): IRunner {
    let runner = new Runner(email);

    return runner;
  }
}
