import { Component, OnInit } from '@angular/core';
import { IRunner } from 'src/app/models/runner';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public runner: IRunner | null = null;
  constructor() { }

  ngOnInit(): void {
    AppStateService.currentRunner.subscribe(runner => {
      this.runner = runner;
    })
  }

}
