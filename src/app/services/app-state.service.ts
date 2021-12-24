import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { IRunner, ITeam, Runner, Team } from '../models/runner';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public static currentRunner: BehaviorSubject<IRunner | null> = new BehaviorSubject<IRunner | null>(null);

  public static currentTeam: BehaviorSubject<ITeam | null> = new BehaviorSubject<ITeam | null>(null);   
}
