import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRunnerComponent } from './register-runner.component';

describe('RegisterRunnerComponent', () => {
  let component: RegisterRunnerComponent;
  let fixture: ComponentFixture<RegisterRunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRunnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
