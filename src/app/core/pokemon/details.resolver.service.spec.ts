import { TestBed } from '@angular/core/testing';

import { Details.ResolverService } from './details.resolver.service';

describe('Details.ResolverService', () => {
  let service: Details.ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Details.ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
