import { TestBed } from '@angular/core/testing';

import { UnAuthguardService } from './un-authguard.service';

describe('UnAuthguardService', () => {
  let service: UnAuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnAuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
