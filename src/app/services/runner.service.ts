import { Injectable } from '@angular/core';
import { IRunner, Runner } from '../models/runner';

@Injectable({
  providedIn: 'root'
})
export class RunnerService {

  constructor() { }

  getRunner(email: string): IRunner {
    let runner = new Runner();
    runner.email = email;

    return runner;
  }
}
