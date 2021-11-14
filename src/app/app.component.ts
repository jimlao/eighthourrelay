import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(firestore: AngularFirestore) {
    this.runners = firestore.collection('runners').valueChanges();
  }
  runners: Observable<any[]>;
  title = 'eight-hour-relay';
}
