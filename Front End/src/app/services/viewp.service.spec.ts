import { TestBed } from '@angular/core/testing';

import { ViewpService } from './viewp.service';

describe('ViewpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewpService = TestBed.get(ViewpService);
    expect(service).toBeTruthy();
  });
});
