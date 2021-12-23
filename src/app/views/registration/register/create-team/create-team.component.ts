import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service'; 
import { RunnerService } from 'src/app/services/runner.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  public teamName: string = '';

  constructor(private runnerService: RunnerService, private router: Router) { 
    this.teamName = '';
  }

  ngOnInit(): void {
  }

  onSubmit(): void { 
    this.runnerService.NewTeam(this.teamName);
    this.router.navigate(["register"]);
  }

  onCancel(): void {
    alert("onCancel");
  }

}
