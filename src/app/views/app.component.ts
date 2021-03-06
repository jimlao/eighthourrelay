import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IRunner, Runner } from '../models/runner';
import { AppStateService } from '../services/app-state.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //runners: Observable<any[]>;
  title = 'eight-hour-relay'; 
  runner: IRunner | null = null;

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    //this.runners = this.firestore.collection('runners').valueChanges();

    this.afAuth.user.subscribe(result=>{
      if (result) {
        this.runner = result ? new Runner(result) : null;
        AppStateService.currentRunner.next(this.runner);
      }
    });               
  }

  signOut() : void  {
    this.afAuth.signOut();
    this.runner = null;
  }
}
