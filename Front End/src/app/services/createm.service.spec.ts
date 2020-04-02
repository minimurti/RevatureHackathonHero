import { TestBed } from '@angular/core/testing';

import { CreatemService } from './createm.service';

describe('CreatemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatemService = TestBed.get(CreatemService);
    expect(service).toBeTruthy();
  });
});
