import { TestBed, inject } from '@angular/core/testing';

import { SensorConfigService } from './sensor-config.service';

describe('SensorConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensorConfigService]
    });
  });

  it('should be created', inject([SensorConfigService], (service: SensorConfigService) => {
    expect(service).toBeTruthy();
  }));
});
