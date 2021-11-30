import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { global } from './shared/models/global';
import { IRunner, Runner } from './shared/models/runner';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  runners: Observable<any[]>;
  afAuth: AngularFireAuth;
  title = 'eight-hour-relay'; 
 
  constructor(firestore: AngularFirestore, afAuth: AngularFireAuth, private router: Router) {
    this.runners = firestore.collection('runners').valueChanges();
    this.afAuth = afAuth;
  }

  ngOnInit(): void {
    this.afAuth.user.subscribe(result=>{
     if (result && result.email) {
       global.currentRunner = new Runner();
       global.currentRunner.email = result.email;
       //window.location.href = '/registration';
       this.router.navigate(['/registration']);
     }

    });
  }

  signOut() : void  {
    this.afAuth.signOut();
  }
}
