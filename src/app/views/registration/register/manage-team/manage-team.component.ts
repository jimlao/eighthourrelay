import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRunner } from 'src/app/models/runner';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.css']
})
export class ManageTeamComponent implements OnInit {
  public runner: IRunner | null = null;
  public isUserPortion: boolean = true;
  public taskTitle: string = '';
  public teamUrl: string = 'sldkfjsdlkfjsdlkfjsdlfkj';

  constructor(private router: Router) { }

  ngOnInit(): void {
    AppStateService.currentRunner.subscribe(runner => {
      this.runner = runner;
    })
    this.resetTaskTitle();
  }

  resetTaskTitle(): void {
    this.taskTitle = this.isUserPortion ? 'Manage Team' : 'User Profile';
  }

  onSwitch(): void {
    this.isUserPortion = !this.isUserPortion;
    this.resetTaskTitle();
  }

  onRegisterRunner(): void {
    if (this.runner) {
      this.runner.isRegistering = true;
      this.router.navigate(['register']);
    }
  }

  copyTeamUrl(): void {
    alert("sdkfsdlfdkf");
  }
}
