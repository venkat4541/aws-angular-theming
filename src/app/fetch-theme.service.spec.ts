import { TestBed } from '@angular/core/testing';

import { FetchThemeService } from './fetch-theme.service';

describe('FetchThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchThemeService = TestBed.get(FetchThemeService);
    expect(service).toBeTruthy();
  });
});
