import { TestBed } from '@angular/core/testing';

import { ViewmService } from './viewm.service';

describe('ViewmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewmService = TestBed.get(ViewmService);
    expect(service).toBeTruthy();
  });
});
