import { Injectable } from '@angular/core';
import { IRunner, Runner, ITeam, Team, DataStore } from '../models/runner';
//import { firebase } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AppStateService } from './app-state.service';

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
  public ValidateTeamName(teamName: string) : boolean {
    return true;
  }

  public NewTeam(teamName: string): void {
    if (this.ValidateTeamName(teamName))
    {
      let runner = AppStateService.currentRunner.value;
      if (!runner)
        return;
      runner.isCaptian = true;
      runner.isRegistered = false;
      AppStateService.currentRunner.next(runner);
      
      let team = new Team(teamName);
      team.runners.push(runner);
      DataStore.teams.push(team);
      AppStateService.currentTeam.next(team);
    }
  }
}
