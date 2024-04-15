import { TestBed } from '@angular/core/testing';

import { OthermesssageService } from './othermesssage.service';

describe('OthermesssageService', () => {
  let service: OthermesssageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OthermesssageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
