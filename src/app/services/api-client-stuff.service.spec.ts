import { TestBed } from '@angular/core/testing';

import { ApiClientStuffService } from './api-client-stuff.service';

describe('ApiClientStuffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiClientStuffService = TestBed.get(ApiClientStuffService);
    expect(service).toBeTruthy();
  });
});
