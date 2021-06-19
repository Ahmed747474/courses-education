/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoureseService } from './courese.service';

describe('Service: Courese', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoureseService]
    });
  });

  it('should ...', inject([CoureseService], (service: CoureseService) => {
    expect(service).toBeTruthy();
  }));
});
