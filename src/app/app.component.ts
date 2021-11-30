import { Component, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  runners: Observable<any[]>;
  afAuth: AngularFireAuth;
  title = 'eight-hour-relay'; 
 
  constructor(firestore: AngularFirestore, afAuth: AngularFireAuth) {
    this.runners = firestore.collection('runners').valueChanges();
    this.afAuth = afAuth;
  }

  signOut() : void  {
    this.afAuth.signOut();
  }
}
