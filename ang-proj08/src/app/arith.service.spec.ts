import { TestBed } from '@angular/core/testing';

import { ArithService } from './arith.service';

describe('ArithService', () => {
  let service: ArithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#sum', () => {
    it('should return 0 given 0s', () => {
      expect(service.sum(0,0)).toBe(0);
    });

    it('should return 4 given 2 and 2', () => {
      expect(service.sum(2,2)).toBe(4);
    });

    it('should return 0 given -2 and 2', () => {
      expect(service.sum(-2,2)).toBe(0);
    });

    it('should return -4 given -2 and -2', () => {
      expect(service.sum(-2,-2)).toBe(-4);
    });
  });
});
