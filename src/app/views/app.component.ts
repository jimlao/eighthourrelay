import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { global } from '../models/global';
import { IRunner, Runner } from '../models/runner';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  runners: Observable<any[]>;
  title = 'eight-hour-relay'; 
  runner: IRunner | null = null;

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    this.runners = this.firestore.collection('runners').valueChanges();
  }

  ngOnInit(): void {
    this.afAuth.user.subscribe(result=>{
     if (result && result.email) {
       this.runner = new Runner();
       this.runner.email = result.email;

       global.currentRunner = this.runner;
     }

    });
  }

  signOut() : void  {
    this.afAuth.signOut();
    global.currentRunner = null;
    this.runner = null;
  }
}
