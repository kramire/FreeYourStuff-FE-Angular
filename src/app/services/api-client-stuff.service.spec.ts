import { TestBed } from '@angular/core/testing';

import { ApiClientStuffService } from './api-client-stuff.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiClientStuffService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiClientStuffService]
    });
  });

  it('should be created', () => {
    const service: ApiClientStuffService = TestBed.get(ApiClientStuffService);
    expect(service).toBeTruthy();
  });
});
