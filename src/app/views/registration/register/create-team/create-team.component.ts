import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  public teamName: string = '';

  constructor() { 
    this.teamName = '';
  }

  ngOnInit(): void {
  }

  onSubmit(): void { 
    alert("onSubmit" + this.teamName);
  }

  onCancel(): void {
    alert("onCancel");
  }

}
