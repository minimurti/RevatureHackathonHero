import { TestBed } from '@angular/core/testing';

import { CreatepService } from './createp.service';

describe('CreatepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatepService = TestBed.get(CreatepService);
    expect(service).toBeTruthy();
  });
});
