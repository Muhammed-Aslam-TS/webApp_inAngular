import { TestBed } from '@angular/core/testing';

import { AdminAthGuardService } from './admin-ath-guard.service';

describe('AdminAthGuardService', () => {
  let service: AdminAthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
