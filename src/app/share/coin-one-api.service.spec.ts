import { TestBed, inject } from '@angular/core/testing';

import { CoinOneApiService } from './coin-one-api.service';

describe('CoinOneApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinOneApiService]
    });
  });

  it('should be created', inject([CoinOneApiService], (service: CoinOneApiService) => {
    expect(service).toBeTruthy();
  }));
});
