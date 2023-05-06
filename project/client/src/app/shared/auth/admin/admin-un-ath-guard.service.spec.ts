import { TestBed } from '@angular/core/testing';

import { AdminUnAthGuardService } from './admin-un-ath-guard.service';

describe('AdminUnAthGuardService', () => {
  let service: AdminUnAthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUnAthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
