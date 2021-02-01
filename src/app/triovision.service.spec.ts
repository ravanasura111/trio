import { TestBed } from '@angular/core/testing';

import { TriovisionService } from './triovision.service';

describe('TriovisionService', () => {
  let service: TriovisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriovisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
