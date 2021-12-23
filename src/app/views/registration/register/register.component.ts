import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IRunner, Runner } from 'src/app/models/runner';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public runner: IRunner | null = null;
  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    AppStateService.currentRunner.subscribe(runner => {
      this.runner = runner;
    })
  }
}
