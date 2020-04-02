import { TestBed } from '@angular/core/testing';

import { ViewaccService } from './viewacc.service';

describe('ViewaccService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewaccService = TestBed.get(ViewaccService);
    expect(service).toBeTruthy();
  });
});
