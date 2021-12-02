import { TestBed } from '@angular/core/testing';

import { RunnerServicesService } from './runner.service';

describe('RunnerServicesService', () => {
  let service: RunnerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunnerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
